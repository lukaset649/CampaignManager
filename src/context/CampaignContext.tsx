import { createContext, useEffect, useReducer } from 'react';
import type { Dispatch, ReactNode } from 'react';
import { INITIAL_BALANCE } from '../config/constants';
import { mockCampaigns } from '../data/mockCampaigns';
import type { AppState, CampaignAction } from '../types/state';
import { loadState, saveState } from '../utils/storage';
import { campaignReducer } from './campaignReducer';

interface CampaignContextValue {
  state: AppState;
  dispatch: Dispatch<CampaignAction>;
}

const defaultState: AppState = {
  campaigns: mockCampaigns,
  billingAccount: {
    accountId: 'emerald-account',
    balance: INITIAL_BALANCE,
  },
};

export const CampaignContext = createContext<CampaignContextValue | null>(null);

interface CampaignProviderProps {
  children: ReactNode;
}

export const CampaignProvider = ({ children }: CampaignProviderProps) => {
  const [state, dispatch] = useReducer(
    campaignReducer,
    null,
    () => loadState() ?? defaultState,
  );

  useEffect(() => {
    saveState(state);
  }, [state]);

  return (
    <CampaignContext.Provider value={{ state, dispatch }}>
      {children}
    </CampaignContext.Provider>
  );
};

import { useEffect, useReducer } from 'react';
import type { ReactNode } from 'react';
import { INITIAL_BALANCE } from '../config/constants';
import { mockCampaigns } from '../data/mockCampaigns';
import type { AppState } from '../types/state';
import { loadState, saveState } from '../utils/storage';
import { CampaignContext } from './CampaignContext';
import { campaignReducer } from './campaignReducer';

const defaultState: AppState = {
  campaigns: mockCampaigns,
  billingAccount: {
    accountId: 'emerald-account',
    balance: INITIAL_BALANCE,
  },
};

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

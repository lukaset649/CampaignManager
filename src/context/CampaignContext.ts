import { createContext } from 'react';
import type { Dispatch } from 'react';
import type { AppState, CampaignAction } from '../types/state';

export interface CampaignContextValue {
  state: AppState;
  dispatch: Dispatch<CampaignAction>;
}

export const CampaignContext = createContext<CampaignContextValue | null>(null);

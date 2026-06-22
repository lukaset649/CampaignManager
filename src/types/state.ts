import type { Campaign } from './campaign';
import type { BillingAccount } from './account';

export interface AppState {
  campaigns: Campaign[];
  billingAccount: BillingAccount;
}

export type CampaignAction =
  | { type: 'ADD_CAMPAIGN'; payload: Campaign }
  | { type: 'UPDATE_CAMPAIGN'; payload: Campaign }
  | { type: 'DELETE_CAMPAIGN'; payload: { id: string } }
  | { type: 'HYDRATE_STATE'; payload: AppState };

import type { Campaign } from './campaign';
import type { BillingAccount } from './account';

export interface AppState {
  campaigns: Campaign[];
  billingAccount: BillingAccount;
}

export type CampaignAction =
  | { type: 'HYDRATE_STATE'; payload: AppState };

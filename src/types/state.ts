import type { Campaign } from './campaign';
import type { BillingAccount } from './account';

export interface AppState {
  campaigns: Campaign[];
  billingAccount: BillingAccount;
}

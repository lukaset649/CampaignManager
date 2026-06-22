import type { AppState, CampaignAction } from '../types/state';

export const campaignReducer = (state: AppState, action: CampaignAction): AppState => {
  switch (action.type) {
    case 'ADD_CAMPAIGN':
      return {
        ...state,
        campaigns: [...state.campaigns, action.payload],
        billingAccount: {
          ...state.billingAccount,
          balance: state.billingAccount.balance - action.payload.fundAmount,
        },
      };

    case 'HYDRATE_STATE':
      return action.payload;
  }
};

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

    case 'UPDATE_CAMPAIGN': {
      const previousCampaign = state.campaigns.find((c) => c.id === action.payload.id);
      const fundAmountDiff = (previousCampaign?.fundAmount ?? 0) - action.payload.fundAmount;
      return {
        ...state,
        campaigns: state.campaigns.map((c) =>
          c.id === action.payload.id ? action.payload : c,
        ),
        billingAccount: {
          ...state.billingAccount,
          balance: state.billingAccount.balance + fundAmountDiff,
        },
      };
    }

    case 'DELETE_CAMPAIGN': {
      const campaignToDelete = state.campaigns.find((c) => c.id === action.payload.id);
      return {
        ...state,
        campaigns: state.campaigns.filter((c) => c.id !== action.payload.id),
        billingAccount: {
          ...state.billingAccount,
          balance: state.billingAccount.balance + (campaignToDelete?.fundAmount ?? 0),
        },
      };
    }

    case 'TOGGLE_STATUS':
      return {
        ...state,
        campaigns: state.campaigns.map((c) =>
          c.id === action.payload.id ? { ...c, status: !c.status } : c,
        ),
      };

    case 'HYDRATE_STATE':
      return action.payload;
  }
};

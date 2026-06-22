import type { AppState, CampaignAction } from '../types/state';

export const campaignReducer = (state: AppState, action: CampaignAction): AppState => {
  switch (action.type) {
    case 'HYDRATE_STATE':
      return action.payload;
  }
};

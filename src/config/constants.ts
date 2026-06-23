export const LOCAL_STORAGE_KEY = 'campaign-manager-state';
export const INITIAL_BALANCE = 1000;

export const ROUTES = {
  HOME: '/',
  CAMPAIGN_NEW: '/campaigns/new',
  CAMPAIGN_EDIT: (id: string) => `/campaigns/${id}/edit`,
};

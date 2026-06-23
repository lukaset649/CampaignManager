import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../config/constants';
import { AppLayout } from '../components/AppLayout/AppLayout';
import { CampaignCreatePage } from '../pages/CampaignCreatePage';
import { CampaignEditPage } from '../pages/CampaignEditPage';
import { CampaignListPage } from '../pages/CampaignListPage';

export const AppRouter = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route path={ROUTES.HOME} element={<CampaignListPage />} />
      <Route path={ROUTES.CAMPAIGN_NEW} element={<CampaignCreatePage />} />
      <Route path="/campaigns/:id/edit" element={<CampaignEditPage />} />
    </Route>
  </Routes>
);

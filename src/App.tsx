import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout/AppLayout';
import { CampaignProvider } from './context/CampaignContext';
import { CampaignCreatePage } from './pages/CampaignCreatePage';
import { CampaignEditPage } from './pages/CampaignEditPage';
import { CampaignListPage } from './pages/CampaignListPage';

const App = () => (
  <BrowserRouter>
    <CampaignProvider>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<CampaignListPage />} />
          <Route path="/campaigns/new" element={<CampaignCreatePage />} />
          <Route path="/campaigns/:id/edit" element={<CampaignEditPage />} />
        </Route>
      </Routes>
    </CampaignProvider>
  </BrowserRouter>
);

export default App;

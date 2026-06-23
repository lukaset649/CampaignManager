import { BrowserRouter } from 'react-router-dom';
import { CampaignProvider } from './context/CampaignProvider';
import { AppRouter } from './router/AppRouter';

const App = () => (
  <BrowserRouter>
    <CampaignProvider>
      <AppRouter />
    </CampaignProvider>
  </BrowserRouter>
);

export default App;

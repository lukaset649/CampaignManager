import { CampaignCard } from './components/CampaignCard/CampaignCard';
import { mockCampaigns } from './data/mockCampaigns';

// Tymczasowy widok — zostanie zastąpiony routingiem i CampaignProvider w kroku 10
function App() {
  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {mockCampaigns.map((campaign) => (
        <CampaignCard key={campaign.id} campaign={campaign} />
      ))}
    </div>
  );
}

export default App;

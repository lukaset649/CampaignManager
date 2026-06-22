import { Link } from 'react-router-dom';
import { CampaignCard } from '../CampaignCard/CampaignCard';
import { useCampaigns } from '../../hooks/useCampaigns';
import './CampaignList.less';

export const CampaignList = () => {
  const { state } = useCampaigns();

  if (state.campaigns.length === 0) {
    return (
      <div className="campaign-list__empty">
        <p>Brak kampanii: dodaj swoją pierwszą kampanię</p>
        <Link to="/campaigns/new">Dodaj kampanię</Link>
      </div>
    );
  }

  return (
    <ul className="campaign-list">
      {state.campaigns.map((campaign) => (
        <li key={campaign.id}>
          <CampaignCard campaign={campaign} />
        </li>
      ))}
    </ul>
  );
};

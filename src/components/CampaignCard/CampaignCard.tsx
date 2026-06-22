import type { Campaign } from '../../types/campaign';
import { CampaignDetail } from './CampaignDetail';
import './CampaignCard.less';

interface CampaignCardProps {
  campaign: Campaign;
}

export const CampaignCard = ({ campaign }: CampaignCardProps) => {
  return (
    <article className="campaign-card">
      <div className="campaign-card__header">
        <h2 className="campaign-card__name">{campaign.name}</h2>
        <span className={`campaign-card__status campaign-card__status--${campaign.status ? 'on' : 'off'}`}>
          {campaign.status ? 'ON' : 'OFF'}
        </span>
      </div>

      <dl className="campaign-card__details">
        <CampaignDetail label="Miasto" value={campaign.town} />
        <CampaignDetail label="Zasięg" value={`${campaign.radius} km`} />
        <CampaignDetail label="Stawka" value={`${campaign.bidAmount.toFixed(2)} PLN`} />
        <CampaignDetail label="Budżet" value={`${campaign.fundAmount.toFixed(2)} PLN`} />
      </dl>

      <div className="campaign-card__keywords">
        {campaign.keywords.map((keyword) => (
          <span key={keyword} className="campaign-card__keyword">
            {keyword}
          </span>
        ))}
      </div>
    </article>
  );
};

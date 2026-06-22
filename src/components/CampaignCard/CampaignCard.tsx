import type { Campaign } from '../../types/campaign';
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
        <div className="campaign-card__detail">
          <dt>Miasto</dt>
          <dd>{campaign.town}</dd>
        </div>
        <div className="campaign-card__detail">
          <dt>Zasięg</dt>
          <dd>{campaign.radius} km</dd>
        </div>
        <div className="campaign-card__detail">
          <dt>Stawka</dt>
          <dd>{campaign.bidAmount.toFixed(2)} PLN</dd>
        </div>
        <div className="campaign-card__detail">
          <dt>Budżet</dt>
          <dd>{campaign.fundAmount.toFixed(2)} PLN</dd>
        </div>
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

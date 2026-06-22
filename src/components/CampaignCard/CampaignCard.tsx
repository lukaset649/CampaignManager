import type { Campaign } from '../../types/campaign';
import { KeywordList } from '../KeywordList/KeywordList';
import { StatusBadge } from '../StatusBadge/StatusBadge';
import { CampaignDetail } from './CampaignDetail';
import './CampaignCard.less';

interface CampaignCardProps {
  campaign: Campaign;
  onDelete: (campaign: Campaign) => void;
  onToggleStatus: (id: string) => void;
}

export const CampaignCard = ({ campaign, onDelete, onToggleStatus }: CampaignCardProps) => {
  return (
    <article className="campaign-card">
      <div className="campaign-card__header">
        <h2 className="campaign-card__name">{campaign.name}</h2>
        <StatusBadge isActive={campaign.status} />
      </div>

      <dl className="campaign-card__details">
        <CampaignDetail label="Miasto" value={campaign.town} />
        <CampaignDetail label="Zasięg" value={`${campaign.radius} km`} />
        <CampaignDetail label="Stawka" value={`${campaign.bidAmount.toFixed(2)} PLN`} />
        <CampaignDetail label="Budżet" value={`${campaign.fundAmount.toFixed(2)} PLN`} />
      </dl>

      <KeywordList keywords={campaign.keywords} />

      <div className="campaign-card__actions">
        <button
          className="campaign-card__btn campaign-card__btn--toggle"
          onClick={() => onToggleStatus(campaign.id)}
        >
          {campaign.status ? 'Wyłącz' : 'Włącz'}
        </button>
        <button
          className="campaign-card__btn campaign-card__btn--delete"
          onClick={() => onDelete(campaign)}
        >
          Usuń
        </button>
      </div>
    </article>
  );
};

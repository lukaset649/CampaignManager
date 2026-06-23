import { Link } from 'react-router-dom';
import type { Campaign } from '../../types/campaign';
import { ROUTES } from '../../config/constants';
import { formatCurrency } from '../../utils/format';
import { KeywordList } from '../KeywordList/KeywordList';
import { ToggleSwitch } from '../ToggleSwitch/ToggleSwitch';
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
        <ToggleSwitch
          checked={campaign.status}
          onChange={() => onToggleStatus(campaign.id)}
          label={campaign.status ? 'Aktywna' : 'Nieaktywna'}
          labelPosition="left"
        />
      </div>

      <dl className="campaign-card__details">
        <CampaignDetail label="Miasto" value={campaign.town} />
        <CampaignDetail label="Zasięg" value={`${campaign.radius} km`} />
        <CampaignDetail label="Stawka" value={formatCurrency(campaign.bidAmount)} />
        <CampaignDetail label="Budżet" value={formatCurrency(campaign.fundAmount)} />
      </dl>

      <KeywordList keywords={campaign.keywords} />

      <div className="campaign-card__actions">
        <Link
          to={ROUTES.CAMPAIGN_EDIT(campaign.id)}
          className="campaign-card__btn campaign-card__btn--edit"
        >
          Edytuj
        </Link>
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

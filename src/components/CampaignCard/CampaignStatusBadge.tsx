interface CampaignStatusBadgeProps {
  isActive: boolean;
}

export const CampaignStatusBadge = ({ isActive }: CampaignStatusBadgeProps) => (
  <span className={`campaign-card__status campaign-card__status--${isActive ? 'on' : 'off'}`}>
    {isActive ? 'ON' : 'OFF'}
  </span>
);

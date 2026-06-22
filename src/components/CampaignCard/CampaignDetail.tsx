interface CampaignDetailProps {
  label: string;
  value: string;
}

export const CampaignDetail = ({ label, value }: CampaignDetailProps) => (
  <div className="campaign-card__detail">
    <dt>{label}</dt>
    <dd>{value}</dd>
  </div>
);

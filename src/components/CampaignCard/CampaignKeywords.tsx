interface CampaignKeywordsProps {
  keywords: string[];
}

export const CampaignKeywords = ({ keywords }: CampaignKeywordsProps) => (
  <div className="campaign-card__keywords">
    {keywords.map((keyword) => (
      <span key={keyword} className="campaign-card__keyword">
        {keyword}
      </span>
    ))}
  </div>
);

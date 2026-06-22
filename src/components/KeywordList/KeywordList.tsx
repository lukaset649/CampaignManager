import './KeywordList.less';

interface KeywordListProps {
  keywords: string[];
}

export const KeywordList = ({ keywords }: KeywordListProps) => (
  <div className="keyword-list">
    {keywords.map((keyword) => (
      <span key={keyword} className="keyword-list__tag">
        {keyword}
      </span>
    ))}
  </div>
);

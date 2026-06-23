import './KeywordList.less';

interface KeywordListProps {
  keywords: string[];
  maxVisible?: number;
}

export const KeywordList = ({ keywords, maxVisible = 6 }: KeywordListProps) => {
  const visibleKeywords = keywords.slice(0, maxVisible);
  const hiddenKeywords = keywords.slice(maxVisible);

  return (
    <div className="keyword-list">
      {visibleKeywords.map((keyword) => (
        <span key={keyword} className="keyword-list__tag">
          {keyword}
        </span>
      ))}
      {hiddenKeywords.length > 0 && (
        <span className="keyword-list__overflow">
          +{hiddenKeywords.length}
          <span className="keyword-list__tooltip" role="tooltip">
            {hiddenKeywords.map((keyword) => (
              <span key={keyword} className="keyword-list__tooltip-tag">
                {keyword}
              </span>
            ))}
          </span>
        </span>
      )}
    </div>
  );
};

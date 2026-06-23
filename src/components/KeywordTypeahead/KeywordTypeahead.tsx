import { useState } from 'react';
import { mockKeywords } from '../../data/mockKeywords';
import { KeywordChip } from './KeywordChip';
import { KeywordDropdown } from './KeywordDropdown';
import './KeywordTypeahead.less';

interface KeywordTypeaheadProps {
  value: string[];
  onChange: (keywords: string[]) => void;
  error?: string;
}

export const KeywordTypeahead = ({ value, onChange, error }: KeywordTypeaheadProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredSuggestions = mockKeywords.filter(
    (keyword) =>
      keyword.toLowerCase().includes(inputValue.toLowerCase()) &&
      !value.includes(keyword),
  );

  const addKeyword = (keyword: string) => {
    const trimmedKeyword = keyword.trim();
    if (!trimmedKeyword || value.includes(trimmedKeyword)) {
      return;
    }
    onChange([...value, trimmedKeyword]);
    setInputValue('');
    setIsDropdownOpen(false);
  };

  const removeKeyword = (keywordToRemove: string) => {
    onChange(value.filter((keyword) => keyword !== keywordToRemove));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsDropdownOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addKeyword(inputValue);
    }
    if (e.key === 'Escape') {
      setIsDropdownOpen(false);
    }
  };

  const handleBlur = () => {
    setTimeout(() => setIsDropdownOpen(false), 150);
  };

  const shouldShowDropdown = isDropdownOpen && filteredSuggestions.length > 0;

  return (
    <div className="keyword-typeahead">
      <div className={`keyword-typeahead__input-area${error ? ' keyword-typeahead__input-area--error' : ''}`}>
        {value.map((keyword) => (
          <KeywordChip
            key={keyword}
            label={keyword}
            onRemove={() => removeKeyword(keyword)}
          />
        ))}
        <input
          type="text"
          className="keyword-typeahead__text-input"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsDropdownOpen(true)}
          onBlur={handleBlur}
          placeholder={value.length === 0 ? 'Wpisz lub wybierz słowo kluczowe...' : ''}
        />
      </div>
      {shouldShowDropdown && (
        <KeywordDropdown suggestions={filteredSuggestions} onSelect={addKeyword} />
      )}
      {error && <span className="keyword-typeahead__error">{error}</span>}
    </div>
  );
};

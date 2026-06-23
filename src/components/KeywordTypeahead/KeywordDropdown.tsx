interface KeywordDropdownProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
}

export const KeywordDropdown = ({ suggestions, onSelect }: KeywordDropdownProps) => (
  <ul className="keyword-typeahead__dropdown" role="listbox">
    {suggestions.map((suggestion) => (
      <li key={suggestion} role="option" aria-selected={false}>
        <button
          type="button"
          className="keyword-typeahead__suggestion"
          onMouseDown={() => onSelect(suggestion)}
        >
          {suggestion}
        </button>
      </li>
    ))}
  </ul>
);

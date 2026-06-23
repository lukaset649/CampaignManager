interface KeywordChipProps {
  label: string;
  onRemove: () => void;
}

export const KeywordChip = ({ label, onRemove }: KeywordChipProps) => (
  <span className="keyword-typeahead__chip">
    {label}
    <button
      type="button"
      className="keyword-typeahead__chip-remove"
      onClick={onRemove}
      aria-label={`Usuń ${label}`}
    >
      ×
    </button>
  </span>
);

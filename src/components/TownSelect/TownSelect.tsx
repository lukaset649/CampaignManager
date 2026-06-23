import { mockTowns } from '../../data/mockTowns';
import './TownSelect.less';

interface TownSelectProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const TownSelect = ({ value, onChange, error }: TownSelectProps) => (
  <div className="town-select">
    <select
      className={`town-select__select${error ? ' town-select__select--error' : ''}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value=""> wybierz miasto </option>
      {mockTowns.map((town) => (
        <option key={town} value={town}>
          {town}
        </option>
      ))}
    </select>
  </div>
);

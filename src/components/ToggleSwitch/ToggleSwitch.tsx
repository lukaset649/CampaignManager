import './ToggleSwitch.less';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  labelPosition?: 'left' | 'right';
}

export const ToggleSwitch = ({ checked, onChange, label, labelPosition = 'right' }: ToggleSwitchProps) => (
  <label className={`toggle-switch${labelPosition === 'left' ? ' toggle-switch--label-left' : ''}`}>
    <input
      type="checkbox"
      className="toggle-switch__input"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
    <span className="toggle-switch__track">
      <span className="toggle-switch__knob" />
    </span>
    {label && <span className="toggle-switch__label">{label}</span>}
  </label>
);

import './ToggleSwitch.less';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export const ToggleSwitch = ({ checked, onChange, label }: ToggleSwitchProps) => (
  <label className="toggle-switch">
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

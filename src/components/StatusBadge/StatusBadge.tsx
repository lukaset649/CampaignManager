import './StatusBadge.less';

interface StatusBadgeProps {
  isActive: boolean;
  labelOn?: string;
  labelOff?: string;
}

export const StatusBadge = ({ isActive, labelOn = 'ON', labelOff = 'OFF' }: StatusBadgeProps) => (
  <span className={`status-badge status-badge--${isActive ? 'on' : 'off'}`}>
    {isActive ? labelOn : labelOff}
  </span>
);

import { useCampaigns } from '../../hooks/useCampaigns';
import { formatCurrency } from '../../utils/format';
import './BalanceWidget.less';

export const BalanceWidget = () => {
  const { state } = useCampaigns();
  const { balance } = state.billingAccount;

  return (
    <div className="balance-widget">
      <span className="balance-widget__label">Stan konta</span>
      <span className="balance-widget__amount">{formatCurrency(balance)}</span>
    </div>
  );
};

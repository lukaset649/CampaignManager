import { useState } from 'react';
import type { Campaign } from '../../types/campaign';
import { mockTowns } from '../../data/mockTowns';
import { formatCurrency } from '../../utils/format';
import './CampaignForm.less';

export type CampaignFormData = Omit<Campaign, 'id'>;

interface CampaignFormProps {
  onSubmit: (data: CampaignFormData) => void;
  onCancel: () => void;
  defaultValues?: CampaignFormData;
  availableBalance?: number;
}

const EMPTY_FORM = {
  name: '',
  keywords: '',
  bidAmount: '',
  fundAmount: '',
  status: true,
  town: '',
  radius: '',
};

const toFormValues = (values: CampaignFormData) => ({
  name: values.name,
  keywords: values.keywords.join(', '),
  bidAmount: String(values.bidAmount),
  fundAmount: String(values.fundAmount),
  status: values.status,
  town: values.town,
  radius: String(values.radius),
});

export const CampaignForm = ({
  onSubmit,
  onCancel,
  defaultValues,
  availableBalance,
}: CampaignFormProps) => {
  const [formData, setFormData] = useState(
    defaultValues ? toFormValues(defaultValues) : EMPTY_FORM,
  );
  const [fundAmountError, setFundAmountError] = useState<string | null>(null);

  const validateFundAmount = (value: string) => {
    if (availableBalance === undefined) {
      return null;
    }
    if (Number(value) > availableBalance) {
      return `Niewystarczające środki. Dostępne saldo: ${formatCurrency(availableBalance)}`;
    }
    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
    if (name === 'fundAmount') {
      setFundAmountError(validateFundAmount(value));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateFundAmount(formData.fundAmount);
    if (error) {
      setFundAmountError(error);
      return;
    }
    onSubmit({
      name: formData.name,
      keywords: formData.keywords.split(',').map((k) => k.trim()).filter(Boolean),
      bidAmount: Number(formData.bidAmount),
      fundAmount: Number(formData.fundAmount),
      status: formData.status,
      town: formData.town,
      radius: Number(formData.radius),
    });
  };

  return (
    <form className="campaign-form" onSubmit={handleSubmit}>
      <div className="campaign-form__field">
        <label htmlFor="name">Nazwa</label>
        <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required />
      </div>

      <div className="campaign-form__field">
        <label htmlFor="keywords">Słowa kluczowe (rozdziel przecinkiem)</label>
        <input id="keywords" name="keywords" type="text" value={formData.keywords} onChange={handleChange} />
      </div>

      <div className="campaign-form__field">
        <label htmlFor="bidAmount">Stawka (PLN)</label>
        <input id="bidAmount" name="bidAmount" type="number" min="0" step="0.01" value={formData.bidAmount} onChange={handleChange} required />
      </div>

      <div className="campaign-form__field">
        <label htmlFor="fundAmount">Budżet (PLN)</label>
        <input
          id="fundAmount"
          name="fundAmount"
          type="number"
          min="0"
          step="0.01"
          value={formData.fundAmount}
          onChange={handleChange}
          required
          className={fundAmountError ? 'campaign-form__input--error' : ''}
        />
        {fundAmountError && (
          <span className="campaign-form__error">{fundAmountError}</span>
        )}
      </div>

      <div className="campaign-form__field">
        <label htmlFor="town">Miasto</label>
        <select id="town" name="town" value={formData.town} onChange={handleChange} required>
          <option value="">-- wybierz miasto --</option>
          {mockTowns.map((town) => (
            <option key={town} value={town}>{town}</option>
          ))}
        </select>
      </div>

      <div className="campaign-form__field">
        <label htmlFor="radius">Zasięg (km)</label>
        <input id="radius" name="radius" type="number" min="1" value={formData.radius} onChange={handleChange} required />
      </div>

      <div className="campaign-form__field campaign-form__field--checkbox">
        <input id="status" name="status" type="checkbox" checked={formData.status} onChange={handleChange} />
        <label htmlFor="status">Aktywna (ON)</label>
      </div>

      <div className="campaign-form__actions">
        <button type="submit" disabled={!!fundAmountError}>Zapisz kampanię</button>
        <button type="button" onClick={onCancel}>Anuluj</button>
      </div>
    </form>
  );
};

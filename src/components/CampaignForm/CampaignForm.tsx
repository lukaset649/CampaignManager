import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MIN_BID_AMOUNT } from '../../config/constants';
import type { CampaignFormData } from '../../utils/validation';
import { campaignSchema } from '../../utils/validation';
import { formatCurrency } from '../../utils/format';
import { KeywordTypeahead } from '../KeywordTypeahead/KeywordTypeahead';
import { TownSelect } from '../TownSelect/TownSelect';
import './CampaignForm.less';

export type { CampaignFormData } from '../../utils/validation';

interface CampaignFormProps {
  onSubmit: (data: CampaignFormData) => void;
  onCancel: () => void;
  defaultValues?: CampaignFormData;
  availableBalance?: number;
}

export const CampaignForm = ({
  onSubmit,
  onCancel,
  defaultValues,
  availableBalance,
}: CampaignFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<CampaignFormData>({
    resolver: zodResolver(campaignSchema),
    defaultValues: defaultValues ?? { keywords: [], status: true },
  });

  const handleFormSubmit = (data: CampaignFormData) => {
    if (availableBalance !== undefined && data.fundAmount > availableBalance) {
      setError('fundAmount', {
        type: 'manual',
        message: `Niewystarczające środki. Dostępne saldo: ${formatCurrency(availableBalance)}`,
      });
      return;
    }
    onSubmit(data);
  };

  return (
    <form className="campaign-form" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="campaign-form__field">
        <label htmlFor="name">Nazwa</label>
        <input
          id="name"
          type="text"
          className={errors.name ? 'campaign-form__input--error' : ''}
          {...register('name')}
        />
        {errors.name && <span className="campaign-form__error">{errors.name.message}</span>}
      </div>

      <div className="campaign-form__field">
        <label>Słowa kluczowe</label>
        <Controller
          name="keywords"
          control={control}
          render={({ field, fieldState }) => (
            <KeywordTypeahead
              value={field.value ?? []}
              onChange={field.onChange}
              error={fieldState.error?.message}
            />
          )}
        />
      </div>

      <div className="campaign-form__field">
        <label htmlFor="bidAmount">Stawka (PLN)</label>
        <input
          id="bidAmount"
          type="number"
          step="0.01"
          min={MIN_BID_AMOUNT}
          className={errors.bidAmount ? 'campaign-form__input--error' : ''}
          {...register('bidAmount')}
        />
        {errors.bidAmount && <span className="campaign-form__error">{errors.bidAmount.message}</span>}
      </div>

      <div className="campaign-form__field">
        <label htmlFor="fundAmount">Budżet (PLN)</label>
        <input
          id="fundAmount"
          type="number"
          step="0.01"
          min="0"
          className={errors.fundAmount ? 'campaign-form__input--error' : ''}
          {...register('fundAmount')}
        />
        {errors.fundAmount && <span className="campaign-form__error">{errors.fundAmount.message}</span>}
      </div>

      <div className="campaign-form__field">
        <label>Miasto</label>
        <Controller
          name="town"
          control={control}
          render={({ field, fieldState }) => (
            <TownSelect
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error?.message}
            />
          )}
        />
      </div>

      <div className="campaign-form__field">
        <label htmlFor="radius">Zasięg (km)</label>
        <input
          id="radius"
          type="number"
          min="1"
          className={errors.radius ? 'campaign-form__input--error' : ''}
          {...register('radius')}
        />
        {errors.radius && <span className="campaign-form__error">{errors.radius.message}</span>}
      </div>

      <div className="campaign-form__field campaign-form__field--checkbox">
        <input id="status" type="checkbox" {...register('status')} />
        <label htmlFor="status">Aktywna (ON)</label>
      </div>

      <div className="campaign-form__actions">
        <button type="submit">Zapisz kampanię</button>
        <button type="button" onClick={onCancel}>Anuluj</button>
      </div>
    </form>
  );
};

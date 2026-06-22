import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockTowns } from '../data/mockTowns';
import { useCampaigns } from '../hooks/useCampaigns';
import { generateId } from '../utils/id';
import './CampaignCreatePage.less';

const EMPTY_FORM = {
  name: '',
  keywords: '',
  bidAmount: '',
  fundAmount: '',
  status: true,
  town: '',
  radius: '',
};

export const CampaignCreatePage = () => {
  const { dispatch } = useCampaigns();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(EMPTY_FORM);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_CAMPAIGN',
      payload: {
        id: generateId(),
        name: formData.name,
        keywords: formData.keywords.split(',').map((k) => k.trim()).filter(Boolean),
        bidAmount: Number(formData.bidAmount),
        fundAmount: Number(formData.fundAmount),
        status: formData.status,
        town: formData.town,
        radius: Number(formData.radius),
      },
    });
    navigate('/');
  };

  return (
    <section className="campaign-create-page">
      <h1>Nowa kampania</h1>
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
          <input id="fundAmount" name="fundAmount" type="number" min="0" step="0.01" value={formData.fundAmount} onChange={handleChange} required />
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
          <button type="submit">Zapisz kampanię</button>
          <button type="button" onClick={() => navigate('/')}>Anuluj</button>
        </div>
      </form>
    </section>
  );
};

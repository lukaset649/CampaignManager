import { useNavigate } from 'react-router-dom';
import { CampaignForm, type CampaignFormData } from '../components/CampaignForm/CampaignForm';
import { useCampaigns } from '../hooks/useCampaigns';
import { generateId } from '../utils/id';
import './CampaignCreatePage.less';

export const CampaignCreatePage = () => {
  const { dispatch } = useCampaigns();
  const navigate = useNavigate();

  const handleSubmit = (data: CampaignFormData) => {
    dispatch({ type: 'ADD_CAMPAIGN', payload: { id: generateId(), ...data } });
    navigate('/');
  };

  return (
    <section className="campaign-create-page">
      <h1>Nowa kampania</h1>
      <CampaignForm onSubmit={handleSubmit} onCancel={() => navigate('/')} />
    </section>
  );
};

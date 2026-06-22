import { useNavigate, useParams } from 'react-router-dom';
import { CampaignForm, type CampaignFormData } from '../components/CampaignForm/CampaignForm';
import { useCampaigns } from '../hooks/useCampaigns';
import './CampaignEditPage.less';

export const CampaignEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useCampaigns();
  const navigate = useNavigate();

  const campaign = state.campaigns.find((c) => c.id === id);

  if (!campaign) {
    return (
      <section>
        <p>Kampania nie została znaleziona.</p>
      </section>
    );
  }

  const handleSubmit = (data: CampaignFormData) => {
    dispatch({ type: 'UPDATE_CAMPAIGN', payload: { id: campaign.id, ...data } });
    navigate('/');
  };

  return (
    <section className="campaign-edit-page">
      <h1>Edytuj kampanię</h1>
      <CampaignForm
        defaultValues={campaign}
        onSubmit={handleSubmit}
        onCancel={() => navigate('/')}
      />
    </section>
  );
};

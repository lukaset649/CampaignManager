import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../config/constants';
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

  const availableBalance = state.billingAccount.balance + campaign.fundAmount;

  const handleSubmit = (data: CampaignFormData) => {
    dispatch({ type: 'UPDATE_CAMPAIGN', payload: { id: campaign.id, ...data } });
    navigate(ROUTES.HOME, { state: { toast: 'Kampania została zaktualizowana.' } });
  };

  return (
    <section className="campaign-edit-page">
      <h1>Edytuj kampanię</h1>
      <CampaignForm
        defaultValues={campaign}
        onSubmit={handleSubmit}
        onCancel={() => navigate(ROUTES.HOME)}
        availableBalance={availableBalance}
      />
    </section>
  );
};

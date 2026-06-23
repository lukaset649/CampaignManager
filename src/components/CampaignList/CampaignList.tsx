import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Campaign } from '../../types/campaign';
import { ROUTES } from '../../config/constants';
import { useCampaigns } from '../../hooks/useCampaigns';
import { CampaignCard } from '../CampaignCard/CampaignCard';
import { ConfirmDeleteModal } from '../ConfirmDeleteModal/ConfirmDeleteModal';
import { Toast } from '../Toast/Toast';
import './CampaignList.less';

export const CampaignList = () => {
  const { state, dispatch } = useCampaigns();
  const [campaignToDelete, setCampaignToDelete] = useState<Campaign | null>(null);
  const [toast, setToast] = useState<{ id: number; message: string; variant: 'success' | 'warning' } | null>(null);

  const handleDeleteRequest = (campaign: Campaign) => setCampaignToDelete(campaign);

  const handleDeleteConfirm = () => {
    if (!campaignToDelete) {
      return;
    }
    dispatch({ type: 'DELETE_CAMPAIGN', payload: { id: campaignToDelete.id } });
    setCampaignToDelete(null);
  };

  const handleDeleteCancel = () => setCampaignToDelete(null);

  const handleToggleStatus = (id: string) => {
    const campaign = state.campaigns.find((c) => c.id === id);
    dispatch({ type: 'TOGGLE_STATUS', payload: { id } });
    setToast(
      campaign?.status
        ? { id: Date.now(), message: 'Kampania została wyłączona.', variant: 'warning' }
        : { id: Date.now(), message: 'Kampania została włączona.', variant: 'success' },
    );
  };

  if (state.campaigns.length === 0) {
    return (
      <div className="campaign-list__empty">
        <p>Brak kampanii: dodaj swoją pierwszą kampanię</p>
        <Link to={ROUTES.CAMPAIGN_NEW}>Dodaj kampanię</Link>
      </div>
    );
  }

  return (
    <>
      <ul className="campaign-list">
        {state.campaigns.map((campaign) => (
          <li key={campaign.id}>
            <CampaignCard
              campaign={campaign}
              onDelete={handleDeleteRequest}
              onToggleStatus={handleToggleStatus}
            />
          </li>
        ))}
      </ul>
      <ConfirmDeleteModal
        isOpen={campaignToDelete !== null}
        campaignName={campaignToDelete?.name ?? ''}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
      {toast && (
        <Toast key={toast.id} message={toast.message} variant={toast.variant} onHide={() => setToast(null)} />
      )}
    </>
  );
};

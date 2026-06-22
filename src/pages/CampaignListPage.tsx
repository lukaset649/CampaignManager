import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CampaignList } from '../components/CampaignList/CampaignList';
import { Toast } from '../components/Toast/Toast';

export const CampaignListPage = () => {
  const location = useLocation();
  const [toastMessage, setToastMessage] = useState<string | null>(
    location.state?.toast ?? null,
  );

  return (
    <section>
      <h1>Kampanie</h1>
      <CampaignList />
      {toastMessage && (
        <Toast message={toastMessage} onHide={() => setToastMessage(null)} />
      )}
    </section>
  );
};

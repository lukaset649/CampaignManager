import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CampaignList } from '../components/CampaignList/CampaignList';
import { Toast } from '../components/Toast/Toast';
import './CampaignListPage.less';

export const CampaignListPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState<string | null>(
    location.state?.toast ?? null,
  );

  useEffect(() => {
    if (location.state?.toast) {
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.pathname, location.state?.toast, navigate]);

  return (
    <section className="campaign-list-page">
      <h1>Kampanie</h1>
      <CampaignList />
      {toastMessage && (
        <Toast message={toastMessage} onHide={() => setToastMessage(null)} />
      )}
    </section>
  );
};

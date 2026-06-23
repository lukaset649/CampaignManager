import { Link, Outlet } from 'react-router-dom';
import { ROUTES } from '../../config/constants';
import { BalanceWidget } from '../BalanceWidget/BalanceWidget';
import './AppLayout.less';

export const AppLayout = () => (
  <>
    <header className="app-header">
      <span className="app-header__title">Campaign Manager</span>
      <div className="app-header__right">
        <BalanceWidget />
        <Link to={ROUTES.CAMPAIGN_NEW} className="app-header__add-link">
          + Dodaj kampanię
        </Link>
      </div>
    </header>
    <main className="app-main">
      <Outlet />
    </main>
  </>
);

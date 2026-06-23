import { Link, Outlet } from 'react-router-dom';
import { ROUTES } from '../../config/constants';
import { BalanceWidget } from '../BalanceWidget/BalanceWidget';
import './AppLayout.less';

export const AppLayout = () => (
  <>
    <header className="app-header">
      <span className="app-header__title">
        <span className="app-header__title-full">Campaign Manager</span>
        <span className="app-header__title-short">CM</span>
      </span>
      <div className="app-header__right">
        <BalanceWidget />
        <Link to={ROUTES.CAMPAIGN_NEW} className="app-header__add-link">
          <span className="app-header__add-link-icon">+</span>
          <span className="app-header__add-link-text"> Dodaj kampanię</span>
        </Link>
      </div>
    </header>
    <main className="app-main">
      <Outlet />
    </main>
  </>
);

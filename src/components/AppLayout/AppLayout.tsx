import { Link, Outlet } from 'react-router-dom';
import { BalanceWidget } from '../BalanceWidget/BalanceWidget';
import './AppLayout.less';

export const AppLayout = () => (
  <>
    <header className="app-header">
      <span className="app-header__title">Campaign Manager</span>
      <div className="app-header__right">
        <BalanceWidget />
        <Link to="/campaigns/new" className="app-header__add-link">
          + Dodaj kampanię
        </Link>
      </div>
    </header>
    <main className="app-main">
      <Outlet />
    </main>
  </>
);

import { Link, Outlet } from 'react-router-dom';

export const AppLayout = () => (
  <>
    <header className="app-header">
      <span className="app-header__title">Campaign Manager</span>
      <Link to="/campaigns/new" className="app-header__add-link">
        + Dodaj kampanię
      </Link>
    </header>
    <main className="app-main">
      <Outlet />
    </main>
  </>
);

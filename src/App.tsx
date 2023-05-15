import './App.scss';

import { Outlet } from 'react-router-dom';

import { SideMenu } from './components/sideMenu/SideMenu';

export const App = () => {
  return (
    <div className="App">
      <SideMenu />

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

import './App.scss';

import { Outlet } from 'react-router-dom';

import { MobileMenu } from './components/mobileMenu/MobileMenu';
import { SideMenu } from './components/sideMenu/SideMenu';

export const App = () => {
  return (
    <div className="App">
      <div className="desktopMenu">
        <SideMenu />
      </div>
      <MobileMenu />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

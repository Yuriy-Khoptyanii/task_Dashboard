import './SideMenu.scss';

import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import * as icons from '../../icons';

const navLinkInfo = [
  { to: '/', icon: icons.Dashboard, name: 'Dashboard', key: true },
  { to: 'product', icon: icons.Product, name: 'Product' },
  { to: 'customers', icon: icons.Customers, name: 'Customers', vector: true },
  { to: 'income', icon: icons.Income, name: 'Income' },
  { to: 'promote', icon: icons.Promote, name: 'Promote' },
  { to: 'help', icon: icons.Help, name: 'Help' },
];

export const SideMenu = () => {
  return (
    <div className="SideMenu">
      <div className="logo">
        <img className="logo__img" src={icons.Logo} alt="logo" />
        <p className="logo__version">v.01</p>
      </div>

      <ul className="nav">
        {navLinkInfo.map((el) => (
          <li key={el.name}>
            <NavLink
              to={el.to}
              className={({ isActive }) =>
                cn('nav__link', {
                  'is-active': isActive,
                })
              }
            >
              <img className="nav__link--icon" src={el.icon} alt="nav__icon" />
              <div className="nav__link--name">{el.name}</div>
              {!el.key && (
                <img className="nav__link--vector" src={icons.Vector} alt="nav__icon" />
              )}
              {el.vector && (
                <img
                  className="nav__link--vector"
                  src={icons.VectorWhite}
                  alt="nav__icon"
                />
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="user">
        <img src={icons.Face} alt="face" />
        <div className="user__info">
          <p className="user__info--name">Evano</p>
          <p className="user__info--role">Project Manager</p>
        </div>
      </div>
    </div>
  );
};

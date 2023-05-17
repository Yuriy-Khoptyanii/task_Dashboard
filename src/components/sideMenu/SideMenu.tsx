import './SideMenu.scss';

import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import {
  CustomersIcon,
  DashboardIcon,
  Face,
  HelpIcon,
  IncomeIcon,
  Logo,
  ProductIcon,
  PromoteIcon,
  VectorIcon,
} from '../../icons';

const navLinkInfo = [
  { to: '/', icon: <DashboardIcon />, name: 'Dashboard', key: true },
  { to: 'product', icon: <ProductIcon />, name: 'Product' },
  { to: 'customers', icon: <CustomersIcon />, name: 'Customers' },
  { to: 'income', icon: <IncomeIcon />, name: 'Income' },
  { to: 'promote', icon: <PromoteIcon />, name: 'Promote' },
  { to: 'help', icon: <HelpIcon />, name: 'Help' },
];

type Props = {
  handleClickMenu?: () => void;
};

export const SideMenu: React.FC<Props> = ({ handleClickMenu = null }) => {
  return (
    <div className="SideMenu">
      <div className="logo">
        <img className="logo__img" src={Logo} alt="logo" />
        <p className="logo__version">v.01</p>
      </div>

      <ul className="nav">
        {navLinkInfo.map((el) => {
          return (
            <li key={el.name}>
              <NavLink
                to={el.to}
                className={({ isActive }) =>
                  cn('nav__link', {
                    'is-active': isActive,
                  })
                }
                onClick={handleClickMenu ? handleClickMenu : () => null}
              >
                {el.icon}
                <div className="nav__link--name">
                  {el.name}
                  {!el.key && <VectorIcon />}
                </div>
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div className="user">
        <img src={Face} alt="face" />
        <div className="user__info">
          <p className="user__info--name">Evano</p>
          <p className="user__info--role">Project Manager</p>
        </div>
      </div>
    </div>
  );
};

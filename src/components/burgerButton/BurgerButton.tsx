import './BurgerButton.scss';

import * as icons from '../../icons';

type Props = {
  handleClickMenu: () => void;
};

export const BurgerButton: React.FC<Props> = ({ handleClickMenu }) => {
  return (
    <div className="BurgerMenu">
      <div className="logo">
        <img className="logo__img" src={icons.Logo} alt="logo" />
        <p className="logo__version">v.01</p>
      </div>

      <button className="BurgerMenu__button" onClick={handleClickMenu}>
        <img src={icons.burger} alt="burger" />
      </button>
    </div>
  );
};

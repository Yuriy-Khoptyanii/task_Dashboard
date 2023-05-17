import './MobileMenu.scss';

import { useEffect, useState } from 'react';

import { BurgerButton } from '../burgerButton/BurgerButton';
import { SideMenu } from '../sideMenu/SideMenu';

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <div className="MobileMenu">
      {isMenuOpen ? (
        <SideMenu handleClickMenu={handleClickMenu} />
      ) : (
        <BurgerButton handleClickMenu={handleClickMenu} />
      )}
    </div>
  );
};

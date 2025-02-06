import React, { useContext, useState } from 'react';
import { Styled_Container } from './styles';
import { HasScreenLoaded } from '@/app/context/loading/has-screen-loaded';
import { COLORS } from '@/app/constants/colors';

export default function BurgerMenu() {
  const hasScreenLoaded = useContext(HasScreenLoaded);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsNavOpen((nav) => !nav);
  };

  return (
    <Styled_Container
      $bright_yellow={COLORS.bright_yellow}
      $bright_orange={COLORS.bright_orange}
      $loaded={hasScreenLoaded}
      $isNavOpen={isNavOpen}
    >
      <nav>
        <div onClick={onClick} className="closed">
          <div className="burger-line"></div>
        </div>
      </nav>
    </Styled_Container>
  );
}

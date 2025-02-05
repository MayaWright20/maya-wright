import React, { useContext, useState } from 'react';
import { Styled_Container } from './styles';
import { HasScreenLoaded } from '@/app/context/loading/has-screen-loaded';

export default function BurgerMenu() {
  const hasScreenLoaded = useContext(HasScreenLoaded);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const isNavAnimationOpening = isNavOpen && hasScreenLoaded;

  const onClick = () => {
    setIsNavOpen((nav) => !nav);
  };

  return (
    <Styled_Container
      $loaded={hasScreenLoaded}
      $isNavAnimationOpening={isNavAnimationOpening}
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

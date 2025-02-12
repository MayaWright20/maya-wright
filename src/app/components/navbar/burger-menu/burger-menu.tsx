import React, { useContext, useState } from 'react';
import { Styled_Container } from './styles';
import { HasScreenLoaded } from '@/app/context/loading/has-screen-loaded';
import { COLORS } from '@/app/constants/colors';
import Circle from '../../circle/circle';

export default function BurgerMenu({
  tabIndex,
  ariaLabel,
}: {
  tabIndex: number;
  ariaLabel: string;
}) {
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
        <div
          tabIndex={tabIndex}
          aria-label={ariaLabel}
          role="button"
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              onClick();
            }
          }}
          onClick={onClick}
          className="container-circle"
        >
          <Circle
            innerColor={COLORS.bright_yellow}
            outterColor={COLORS.bright_orange}
            outterHeight={'25px'}
          />
        </div>
      </nav>
    </Styled_Container>
  );
}

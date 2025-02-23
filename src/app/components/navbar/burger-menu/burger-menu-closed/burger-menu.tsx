import React, { useContext, useEffect, useState } from 'react';

import { Styled_Container, Styled_Nav_Open } from './styles';
import { HasScreenLoadedContext } from '@/app/context/loading/has-screen-loaded';
import { COLORS } from '@/app/constants/colors';
import Circle from '../../../circle/circle';
import Link from 'next/link';

export default function BurgerMenu({
  tabIndex,
  ariaLabel,
  isNavOpen,
  onClick,
}: {
  tabIndex: number;
  ariaLabel: string;
  isNavOpen: boolean;
  onClick: () => void;
}) {
  const hasScreenLoaded = useContext(HasScreenLoadedContext);
  const [isHovered, setIsHovered] = useState<undefined | number>(undefined);

  const navItems = [
    {
      title: 'Github',
      href: 'https://github.com/MayaWright20',
      target: '_blank',
      innerColor: ' rgb(246, 119, 255)',
      middleColor: 'transparent',
      outterColor: 'rgb(13, 255, 0)',
      outerHeight: '80px',
      hoverOutterBorderWidth: '40px',
    },
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/maya-wright-2b7922168/',
      target: '_blank',
      innerColor: 'rgb(0, 255, 251)',
      middleColor: 'transparent',
      outterColor: 'rgb(215, 255, 84)',
      outerHeight: '80px',
      hoverOutterBorderWidth: '40px',
    },
  ];

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
      <Styled_Nav_Open
        $bright_yellow={COLORS.bright_yellow}
        $bright_orange={COLORS.bright_orange}
        $loaded={hasScreenLoaded}
        $isNavOpen={isNavOpen}
      >
        <div className="nav-open">
          <ul className="nav-wrapper">
            {navItems.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(undefined)}
              >
                <Link
                  href={item.href}
                  className="nav-item"
                  target={item.target}
                  tabIndex={isNavOpen ? 0 : -1}
                >
                  <Circle
                    innerColor={item.innerColor}
                    outterColor={item.outterColor}
                    outterHeight={'40px'}
                  />
                  <p
                    style={{
                      color:
                        isHovered === index
                          ? item.outterColor
                          : item.innerColor,
                    }}
                  >
                    {item.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Styled_Nav_Open>
    </Styled_Container>
  );
}

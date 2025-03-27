import React, { useContext, useEffect, useState } from 'react';

import {
  Styled_Container,
  Styled_Nav_Item_title,
  Styled_Nav_Open,
} from './styles';
import { HasScreenLoadedContext } from '@/app/context/loading/has-screen-loaded';
import { COLORS } from '@/app/constants/colors';
import Circle from '../../../circle/circle';
import Link from 'next/link';
import { IsNavOpenContext } from '@/app/context/nav-bar/isNavOpenContext';
import { useStore } from '@/app/store/store';

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
  const { isDaylightTheme } = useStore();
  const hasScreenLoaded = useContext(HasScreenLoadedContext);
  const isBurgerMenuOpen = useContext(IsNavOpenContext);
  const [isHovered, setIsHovered] = useState<undefined | number>(undefined);
  const [navIsLoaded, setNavIsLoaded] = useState<boolean>(isBurgerMenuOpen);

  useEffect(() => {
    if (isBurgerMenuOpen) {
      setNavIsLoaded(true);
    }
  }, [isBurgerMenuOpen]);

  const navItems = [
    {
      title: 'Github',
      href: 'https://github.com/MayaWright20',
      target: '_blank',
      innerColor: ' rgb(246, 119, 255)',
      middleColor: 'rgb(123,132,140)',
      outterColor: 'rgb(13, 255, 0)',
      outerHeight: '80px',
      hoverOutterBorderWidth: '40px',
    },
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/maya-wright-2b7922168/',
      target: '_blank',
      innerColor: 'rgb(0, 255, 251)',
      middleColor: 'rgb(127,135,141)',
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
      $navIsLoaded={navIsLoaded}
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
            middleColor={
              isDaylightTheme && isNavOpen
                ? `rgb(119,129,138)`
                : isDaylightTheme
                ? `${COLORS.light_blue}`
                : 'black'
            }
            outterHeight={'25px'}
          />
        </div>
      </nav>
      <Styled_Nav_Open
        $bright_yellow={COLORS.bright_yellow}
        $bright_orange={COLORS.bright_orange}
        $loaded={hasScreenLoaded}
        $isNavOpen={isNavOpen}
        $navIsLoaded={navIsLoaded}
      >
        <div className="nav-open">
          <ul className="nav-wrapper">
            {navItems.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(undefined)}
                aria-label={item.title}
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
                    middleColor={isDaylightTheme ? item.middleColor : 'black'}
                    outterHeight={'40px'}
                  />
                  <Styled_Nav_Item_title
                    $innerColor={item.innerColor}
                    $outterColor={item.outterColor}
                  >
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
                  </Styled_Nav_Item_title>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Styled_Nav_Open>
    </Styled_Container>
  );
}

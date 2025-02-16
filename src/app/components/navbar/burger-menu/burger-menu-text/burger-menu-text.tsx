import Link from 'next/link';
import { Styled_Container } from './styles';
import Circle from '@/app/components/circle/circle';

const linkItems = [
  {
    title: 'Github',
    href: 'https://github.com/MayaWright20',
    target: '_blank',
    innerColor: 'white',
    middleColor: 'transparent',
    outterColor: 'white',
    outerHeight: '80px',
    hoverOutterBorderWidth: '40px',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/maya-wright-2b7922168/',
    target: '_blank',
    innerColor: 'white',
    middleColor: 'transparent',
    outterColor: 'white',
    outerHeight: '80px',
    hoverOutterBorderWidth: '40px',
  },
];

export default function BurgerMenuText({
  isNavOpenTimer,
}: {
  isNavOpenTimer: boolean;
}) {
  return (
    <Styled_Container $isNavOpen={isNavOpenTimer}>
      <ul>
        {linkItems.map((item, index) => (
          <li key={index}>
            <Link className="link" href={item.href} target={item.target}>
              <Circle
                innerColor={item.innerColor}
                middleColor={item.middleColor}
                outterColor={item.outterColor}
                outterHeight={item.outerHeight}
                hoverOutterBorderWidth={item.hoverOutterBorderWidth}
              />
              <div className="title-wrapper">
                <p>{item.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Styled_Container>
  );
}

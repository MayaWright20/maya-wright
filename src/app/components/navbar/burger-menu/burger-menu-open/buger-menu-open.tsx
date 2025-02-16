import { motion } from 'framer-motion';
import { Styled_Container } from './styles';
import { useContext } from 'react';
import { IsNavOpenContext } from '@/app/context/nav-bar/isNavOpenContext';

export default function BurgerMenuOpen({ onClick }: { onClick: () => void }) {
  const isNavOpenContext = useContext(IsNavOpenContext);

  const image: React.CSSProperties = {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    position: 'absolute',
  };

  return (
    <Styled_Container $isNavOpen={isNavOpenContext}>
      <div className="close-nav" onClick={onClick}></div>
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 100% 100%"
        style={image}
      >
        <motion.circle
          cx="68px"
          cy="68px"
          r="27"
          stroke="rgb(216, 230, 240)"
          fill="transparent"
          strokeWidth={5}
          strokeLinecap="round"
          style={{
            filter: 'drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.217))',
          }}
          animate={{
            r: isNavOpenContext ? 27 : 1028,
            strokeWidth: isNavOpenContext ? 2000 : 5,
          }}
          transition={{
            duration: 4,
            ease: [0.9, 0.5, 0.4, 0.9],
          }}
        />
      </motion.svg>
    </Styled_Container>
  );
}

import { motion } from 'framer-motion';
import { Container } from './styles';
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
    <Container $isNavOpen={isNavOpenContext}>
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
          r={isNavOpenContext ? 1028 : 31}
          stroke="rgb(216, 230, 240)"
          fill="transparent"
          strokeWidth={isNavOpenContext ? '200' : '5'}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ strokeWidth: 5 }}
          animate={{ strokeWidth: isNavOpenContext ? 2000 : 5 }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
          }}
        />
      </motion.svg>
    </Container>
  );
}

import { motion } from 'framer-motion';
import { Container } from './styles';

export default function BurgerMenuOpen({ isNavOpen }: { isNavOpen: boolean }) {
  const image: React.CSSProperties = {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    position: 'absolute',
  };

  return (
    <Container $isNavOpen={isNavOpen}>
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 100% 100%"
        style={image}
      >
        <motion.circle
          cx="68px" // Adjust to position at the white circle
          cy="68px"
          r={isNavOpen ? 1028 : 31}
          stroke="white"
          fill="transparent"
          strokeWidth={isNavOpen ? '200' : '5'}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ strokeWidth: 5 }}
          animate={{ strokeWidth: isNavOpen ? 2000 : 5 }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
          }}
        />
      </motion.svg>
    </Container>
  );
}

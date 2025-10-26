import { Font_AtkinsonHyperlegible } from '@/utils/fonts/global-fonts';
import { Styled_Container } from './style';

interface Props {
  isPageLoaded: boolean;
  onClick: () => void;
}

export default function PageLabel({ isPageLoaded, onClick }: Props) {
  return (
    <Styled_Container $isPageLoaded={isPageLoaded}>
      <div
        onClick={() => onClick()}
        className={Font_AtkinsonHyperlegible.className}
      >
        Maya Wright
      </div>
    </Styled_Container>
  );
}

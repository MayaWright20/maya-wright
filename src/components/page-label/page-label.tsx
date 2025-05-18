import { Font_AtkinsonHyperlegible } from '@/utils/fonts/global-fonts';
import { Styled_Container } from './style';

interface Props {
  isPageLoaded: boolean;
}

export default function PageLabel({ isPageLoaded }: Props) {
  return (
    <Styled_Container $isPageLoaded={isPageLoaded}>
      <div className={Font_AtkinsonHyperlegible.className}>Maya Wright</div>
    </Styled_Container>
  );
}

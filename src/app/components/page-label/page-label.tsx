import { Font_AtkinsonHyperlegible } from '@/app/utils/fonts/global-fonts';
import { Styled_Container } from './style';

export default function PageLabel() {
  return (
    <Styled_Container>
      <div className={Font_AtkinsonHyperlegible.className}>Maya Wright</div>
    </Styled_Container>
  );
}

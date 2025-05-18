import { Anton } from 'next/font/google';
import { Atkinson_Hyperlegible } from 'next/font/google';

export const Font_Anton = Anton({ subsets: ['latin'], weight: '400' });

export const Font_AtkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ['latin'],
  weight: ['400', '700'],
});

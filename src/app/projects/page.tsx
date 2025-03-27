'use client';
import { useRouter } from 'next/navigation';
import { usePersistStore } from '../store/store';
import { Styled_Container } from './style';

export default function Projects() {
  const { isDaylightTheme } = usePersistStore();
  const router = useRouter();
  const backToHomeHandler = () => {
    router.push('/');
  };
  return (
    <Styled_Container $isDaylightTheme={isDaylightTheme}>
      <p onClick={backToHomeHandler}>home</p>
      <div>projects</div>
    </Styled_Container>
  );
}

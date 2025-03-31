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
      <div>{`Adding project that will be shown nicely soon... Promise!!!!!!!`}</div>
    </Styled_Container>
  );
}

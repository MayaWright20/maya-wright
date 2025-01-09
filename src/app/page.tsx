'use client';
import dynamic from 'next/dynamic';

const HomeScreen = dynamic(() => import('@/app/components/r3F/home-screen'), {
  ssr: false,
});

export default function Home() {
  return <HomeScreen />;
}

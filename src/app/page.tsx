'use client';
import dynamic from 'next/dynamic';

const HomeScreen = dynamic(() => import('@/app/screens/home-screen'), {
  ssr: false,
});

export default function Home() {
  return <HomeScreen />;
}

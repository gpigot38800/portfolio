import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Bio from '@/components/sections/Bio';
import TechStack from '@/components/sections/TechStack';

export const metadata: Metadata = {
  title: 'À propos - Portfolio',
  description:
    "12 ans d'expérience en restauration, transition vers no-code et IA",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Bio />
      <TechStack />
    </>
  );
}

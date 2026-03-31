import type { Metadata } from 'next';
import { HeroSection } from '@/components/hero-section';
import { ServicesGrid } from '@/components/services-grid';
import { SecureByDesign } from '@/components/secure-by-design';
import { ContactSection } from '@/components/contact-section';

export const metadata: Metadata = {
  title: 'AI Solutions & Software Development',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <SecureByDesign />
      <ContactSection />
    </>
  );
}

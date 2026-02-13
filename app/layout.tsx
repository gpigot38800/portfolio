import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio - Développeur Web',
  description: 'Portfolio professionnel - Développeur Web Full Stack',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {/* TODO Phase 2: Navbar */}
        {children}
        {/* TODO Phase 2: Footer */}
      </body>
    </html>
  );
}

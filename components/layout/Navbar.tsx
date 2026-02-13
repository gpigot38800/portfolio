'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Ma présentation' },
  { href: '/realisations', label: 'Réalisations/Projets' },
  { href: '/contact', label: 'Me contacter' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      aria-label="Navigation principale"
      className="sticky top-0 z-40 glass border-b border-white/20 shadow-lg animate-slide-down"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo with gradient */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-2xl font-display font-bold transition-all"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600">
              GP
            </span>
            <span className="text-gray-900 group-hover:text-primary-600 transition-colors">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  isActive(link.href)
                    ? 'text-white bg-gradient-to-r from-primary-600 to-primary-700 shadow-lg shadow-primary-500/30'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute inset-0 bg-gradient-shine bg-[length:200%_100%] animate-shine rounded-lg opacity-30" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Ouvrir le menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-gray-700 hover:text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
          >
            {/* Hamburger Icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-50 md:hidden animate-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="relative h-full glass-dark border-r border-slate-700/20 max-w-sm w-full animate-slide-up">
            <div className="flex flex-col h-full">
              {/* Header with Close Button */}
              <div className="flex items-center justify-between px-6 h-18 py-3 border-b border-slate-700/20">
                <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
                  GP Portfolio
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Fermer le menu"
                  className="p-2.5 rounded-xl text-slate-300 hover:text-primary-400 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col justify-center flex-1 gap-4 px-6">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`group relative px-6 py-4 text-xl font-semibold rounded-xl transition-all duration-300 animate-slide-up ${
                      isActive(link.href)
                        ? 'text-white bg-gradient-to-r from-primary-600 to-primary-700 shadow-xl shadow-primary-500/30'
                        : 'text-slate-200 hover:text-white hover:bg-slate-800'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link.label}
                    <svg
                      className={`inline-block ml-2 w-5 h-5 transition-transform ${
                        isActive(link.href) ? 'translate-x-1' : 'group-hover:translate-x-1'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

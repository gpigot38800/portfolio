import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        {/* Profile image with gradient border */}
        <div className="relative inline-block mb-8 animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-lg opacity-50 animate-pulse" />
          <div className="relative p-1 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 rounded-full bg-[length:200%_100%] animate-gradient-x">
            <Image
              src="/images/profile.jpg"
              alt="Photo de profil"
              width={220}
              height={220}
              priority
              className="rounded-full object-cover border-4 border-white shadow-2xl"
              style={{ objectPosition: 'center 30%' }}
            />
          </div>
        </div>

        {/* Title with gradient */}
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 animate-slide-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 bg-[length:200%_100%] animate-gradient-x">
            Geoffrey Pigot
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed animate-slide-up font-medium" style={{ animationDelay: '0.1s' }}>
          12 ans d&apos;expérience en restauration,
          <span className="text-primary-600 font-semibold"> en reconversion </span>
          vers le no-code et l&apos;IA
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="px-4 py-2 bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 text-primary-700 rounded-full text-sm font-semibold shadow-sm">
            🤖 Intelligence Artificielle
          </span>
          <span className="px-4 py-2 bg-gradient-to-r from-accent-50 to-accent-100 border border-accent-200 text-accent-700 rounded-full text-sm font-semibold shadow-sm">
            ⚡ No-Code
          </span>
          <span className="px-4 py-2 bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 text-slate-700 rounded-full text-sm font-semibold shadow-sm">
            🚀 Automatisation
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Button variant="primary" href="/realisations">
            Voir mes réalisations
          </Button>
          <Button variant="secondary" href="/contact">
            Me contacter
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-primary-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

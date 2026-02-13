import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Image
          src="/images/profile.jpg"
          alt="Photo de profil"
          width={200}
          height={200}
          priority
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
          Geoffrey Pigot
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          12 ans d&apos;expérience en restauration, transition vers no-code et
          IA
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button variant="primary" href="/realisations">
            Voir mes réalisations
          </Button>
          <Button variant="secondary" href="/contact">
            Me contacter
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Metadata } from 'next';
import ContactForm from '@/components/ui/ContactForm';

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Contact - Portfolio',
  description:
    'Contactez-moi pour échanger sur l\'automatisation IA, les intégrations no-code ou le développement web. Je lirai votre message avec intérêt.',
  openGraph: {
    title: 'Contact - Portfolio',
    description:
      'Contactez-moi pour échanger sur l\'automatisation IA, les intégrations no-code ou le développement web. Je lirai votre message avec intérêt.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/contact`,
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contactez-moi
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Si vous souhaitez me contacter pour échanger sur l&apos;automatisation IA, les
            intégrations no-code ou le développement web, je lirai votre message avec le
            plus grand intérêt et vous répondrai avec plaisir. N&apos;hésitez pas à me faire
            part de vos questions, idées ou projets.
          </p>
        </div>

        {/* Contact form */}
        <ContactForm />

        {/* Additional info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-gray-600">
            <p className="text-sm">
              Vous pouvez également me retrouver sur{' '}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProjects } from '@/lib/getProjects';
import { markdownToHtml } from '@/lib/markdownToHtml';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

// Generate static params for all projects
export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.meta.slug,
  }));
}

// Generate metadata dynamically for each project
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const projects = getProjects();
  const project = projects.find((p) => p.meta.slug === slug);

  if (!project) {
    return {
      title: 'Projet non trouvé - Portfolio',
      description: 'Ce projet n\'existe pas',
    };
  }

  return {
    title: `${project.meta.title} - Portfolio`,
    description: project.meta.excerpt,
    openGraph: {
      title: `${project.meta.title} - Portfolio`,
      description: project.meta.excerpt,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${project.meta.coverUrl}`,
          width: 1200,
          height: 630,
          alt: project.meta.title,
        },
      ],
    },
  };
}

// Project page component
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projects = getProjects();
  const project = projects.find((p) => p.meta.slug === slug);

  if (!project) {
    notFound();
  }

  // Convert Markdown to HTML
  const contentHtml = await markdownToHtml(project.content);

  return (
    <main className="min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-accent transition-colors">
            Accueil
          </Link>
          <span className="mx-2">&gt;</span>
          <Link
            href="/realisations"
            className="hover:text-accent transition-colors"
          >
            Réalisations
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-900 font-medium">{project.meta.title}</span>
        </nav>

        {/* Title avec dégradé comme sur la page liste */}
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 animate-slide-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600">
            {project.meta.title}
          </span>
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.meta.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        {/* Date */}
        <p className="text-sm text-gray-500 mb-8">
          Publié en {project.meta.date}
        </p>

        {/* Layout en 2 colonnes : contenu + galerie d'images */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne principale : Contenu */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            {/* Content with colorful sections */}
            <article
              className="prose prose-lg max-w-none mb-12
                prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b-2 prose-h2:border-blue-200 prose-h2:text-blue-900
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-indigo-800
                prose-h4:text-lg prose-h4:mt-4 prose-h4:mb-2 prose-h4:text-purple-700
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-ul:my-4 prose-li:text-gray-700
                prose-ol:my-4
                prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
                prose-code:text-pink-600 prose-code:bg-pink-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-gray-800 prose-pre:text-gray-100"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
              <Button variant="secondary" href="/realisations">
                ← Retour aux réalisations
              </Button>
              {project.meta.demoUrl && (
                <Button
                  variant="primary"
                  href={project.meta.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🚀 Tester l&apos;application
                </Button>
              )}
              <Button variant="primary" href="/contact">
                Me contacter
              </Button>
            </div>
          </div>

          {/* Colonne secondaire : Galerie d'images (sticky) */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="sticky top-8 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                📸 Aperçus du projet
              </h2>

              {/* Cover Image - Clickable */}
              <a
                href={project.meta.coverUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-48 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <Image
                  src={project.meta.coverUrl}
                  alt={`${project.meta.title} - Dashboard`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 384px"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                    🔍 Cliquer pour agrandir
                  </span>
                </div>
              </a>

              {/* Workflow Image - Clickable */}
              <a
                href={`/projects/${slug}/workflow.png`}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-48 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <Image
                  src={`/projects/${slug}/workflow.png`}
                  alt={`${project.meta.title} - Analyse par secteur`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 384px"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                    🔍 Cliquer pour agrandir
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

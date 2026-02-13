import { Metadata } from 'next';
import { getProjects } from '@/lib/getProjects';
import ProjectCard from '@/components/ui/ProjectCard';

export const metadata: Metadata = {
  title: 'Réalisations - Portfolio',
  description:
    'Découvrez mes réalisations en no-code et intelligence artificielle : automatisations, applications web et projets innovants.',
};

export default function RealisationsPage() {
  // Récupérer tous les projets
  const projects = getProjects();

  // Trier par date décroissante (plus récent en premier)
  const sortedProjects = projects.sort((a, b) => {
    const dateA = new Date(a.meta.date);
    const dateB = new Date(b.meta.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <main className="min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600">
              Mes Réalisations
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Découvrez mes projets en no-code et intelligence artificielle, de
            l&apos;automatisation à la création d&apos;applications web.
          </p>
        </div>

        {/* Projects Grid */}
        {sortedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProjects.map((project) => (
              <ProjectCard key={project.meta.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Aucun projet disponible pour le moment.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

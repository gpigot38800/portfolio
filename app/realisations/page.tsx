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
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mes Réalisations
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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

import Image from 'next/image';
import { Project } from '@/lib/types';
import Badge from './Badge';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { meta } = project;

  return (
    <article className="group border border-gray-200 rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-200 flex flex-col h-full">
      {/* Cover Image */}
      <div className="relative w-full aspect-video">
        <Image
          src={meta.coverUrl}
          alt={meta.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{meta.title}</h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">{meta.excerpt}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {meta.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        {/* CTA Button - pushed to bottom */}
        <div className="mt-auto">
          <Button variant="primary" href={`/realisations/${meta.slug}`}>
            Voir le projet
          </Button>
        </div>
      </div>
    </article>
  );
}

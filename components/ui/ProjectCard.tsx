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
    <article className="group relative gradient-border-animated bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden hover:-translate-y-2">
      {/* Cover Image with overlay */}
      <div className="relative w-full aspect-video overflow-hidden rounded-t-xl">
        <Image
          src={meta.coverUrl}
          alt={meta.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Tags on image */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {meta.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur-sm text-primary-700 rounded-full shadow-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full bg-gradient-to-br from-white to-slate-50/50">
        {/* Title with gradient on hover */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gradient transition-all duration-300">
          {meta.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {meta.excerpt}
        </p>

        {/* Tags (desktop) */}
        <div className="flex flex-wrap gap-2 mb-6 group-hover:opacity-0 transition-opacity duration-300">
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

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </article>
  );
}

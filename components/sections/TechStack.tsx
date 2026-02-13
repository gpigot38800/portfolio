import Badge from '@/components/ui/Badge';

export default function TechStack() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Technologies
        </h2>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <Badge>Next.js</Badge>
          <Badge>TypeScript</Badge>
          <Badge>TailwindCSS</Badge>
          <Badge>Intelligence Artificielle</Badge>
          <Badge>No-Code</Badge>
        </div>
      </div>
    </section>
  );
}

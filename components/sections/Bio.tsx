export default function Bio() {
  return (
    <section className="relative py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Title with gradient */}
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center animate-slide-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600">
            Mon parcours
          </span>
        </h2>

        {/* Bio content in a card */}
        <div className="glass rounded-2xl p-8 md:p-10 space-y-6 animate-fade-in shadow-xl">
          <p className="text-gray-800 text-lg leading-relaxed">
            Mon parcours professionnel a débuté il y a <span className="font-semibold text-primary-700">douze ans dans la restauration</span>. J&apos;ai commencé comme employé polyvalent, et au fil des années, j&apos;ai gravi les échelons jusqu&apos;à occuper le poste de <span className="font-semibold text-primary-700">directeur de la restauration</span> dans une clinique à Vannes. À ce poste, je pilotais une équipe de 15 personnes et supervisais la production de plus de 500 repas par jour, tout en gérant un budget conséquent et en garantissant le respect des normes HACCP.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            Ces années m&apos;ont appris bien plus que les métiers de la restauration. J&apos;y ai développé une capacité à <span className="font-semibold text-primary-700">coordonner des équipes</span>, à <span className="font-semibold text-primary-700">optimiser des processus complexes</span> et à prendre des décisions rapides dans des environnements sous pression. Ce que je ne savais pas encore, c&apos;est que ces compétences allaient devenir des atouts précieux pour un tout autre univers.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            Parallèlement à ma carrière, j&apos;ai toujours nourri une passion pour le digital et les nouvelles technologies. Cette curiosité, longtemps restée en arrière-plan, a fini par prendre le dessus. J&apos;ai réalisé que le <span className="font-semibold text-accent-600">no-code</span> et l&apos;<span className="font-semibold text-accent-600">intelligence artificielle</span> me permettaient de concrétiser des idées sans être freiné par des barrières techniques. Plus encore, ils me donnaient l&apos;opportunité de créer des outils qui résolvent de vrais problèmes métier — exactement comme j&apos;avais l&apos;habitude de le faire en optimisant les process de mon service.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            Aujourd&apos;hui, cette reconversion est bien engagée. J&apos;ai développé plusieurs projets concrets : un système qui publie automatiquement du contenu sur LinkedIn, un agent IA de veille technologique, et des dashboards professionnels pour piloter des activités commerciales ou suivre la fatigue des équipes de nuit. Ces réalisations ne sont pas de simples exercices, ce sont des applications déployées en production qui fonctionnent et répondent à des besoins réels. Elles témoignent d&apos;une chose simple : j&apos;ai conservé mon approche pragmatique et ma capacité à livrer des résultats, mais je les applique désormais dans un domaine qui me passionne vraiment.
          </p>
        </div>
      </div>
    </section>
  );
}

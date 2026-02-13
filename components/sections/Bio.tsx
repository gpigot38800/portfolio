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
            Fort de <span className="font-semibold text-primary-700">douze années d&apos;expérience</span> dans la restauration, j&apos;ai
            évolué à travers l&apos;ensemble des postes du secteur, débutant comme
            employé polyvalent pour accéder ensuite à des fonctions de management,
            jusqu&apos;à devenir <span className="font-semibold text-primary-700">directeur de la restauration</span> au sein d&apos;une
            clinique à Vannes.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            Au fil de ce parcours, j&apos;ai développé de solides compétences en
            <span className="font-semibold text-primary-700"> gestion d&apos;équipe</span>,
            <span className="font-semibold text-primary-700"> organisation</span>,
            <span className="font-semibold text-primary-700"> optimisation des process</span> et
            <span className="font-semibold text-primary-700"> pilotage opérationnel</span>.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            Aujourd&apos;hui, animé par une passion de longue date pour le
            digital, je souhaite me réorienter vers le <span className="font-semibold text-accent-600">no-code</span> et
            l&apos;<span className="font-semibold text-accent-600">intelligence artificielle</span>. Cette transition s&apos;inscrit à la
            fois dans une volonté d&apos;évolution professionnelle et dans la
            recherche d&apos;un meilleur équilibre entre vie personnelle et vie
            professionnelle.
          </p>
        </div>
      </div>
    </section>
  );
}

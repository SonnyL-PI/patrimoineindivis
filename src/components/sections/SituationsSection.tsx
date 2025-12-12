export function SituationsSection() {
  return (
    <section className="section-padding bg-secondary/50" id="situation">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="heading-section text-foreground mb-6">
            Votre situation
          </h2>
          <h3 className="text-xl md:text-2xl text-accent font-serif italic mb-8">
            Que vous soyez en indivision familiale, maritale, amicale ou autre, vous vous trouvez peut être dans une de ces situations :
          </h3>
        </div>

        {/* Situations List */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">
                  Vous partagez la gestion de vos biens immobiliers avec vos frères et sœurs avec qui vous n'avez plus aucune relation.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">
                  Vous vivez dans un bien avec votre indivisaire et la situation est devenue insupportable.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">
                  Vous détenez une minorité dans l'indivision et personne ne vous considère…
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">
                  Vous êtes issu d'un deuxième mariage de votre père ou de votre mère et vos demis-frères et sœurs vous ignorent.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">
                  Vous vivez à l'étranger et vos co-indivisaires profitent de la situation pour vous spolier.
                </span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">
                  Votre co-indivisaire profite du ou des biens. Vous payez la moitié des frais sans avoir le droit d'en jouir.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">
                  Vous souhaitez vendre des biens mais vos co-indivisaires refusent toutes propositions car ils habitent dedans. Ils ne veulent pas racheter votre part.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">
                  Vous souhaitez vendre le bien en indivision mais personne n'est d'accord sur le prix de vente et la situation est bloquée.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">
                  Vous souhaitez investir dans un nouveau projet de vie mais vos co-indivisaires ne souhaitent pas vendre.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span className="text-muted-foreground">
                  Autant de situations qui vous empêchent de profiter de la valeur de ces biens, bloqué dans votre indivision.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

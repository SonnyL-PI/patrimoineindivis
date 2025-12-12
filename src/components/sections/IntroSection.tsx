import buildingImage from "@/assets/building-illustration.png";

export function IntroSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              <strong className="font-semibold">Patrimoine Indivis</strong> est une société spécialisée dans le rachat de parts indivises mêmes minoritaires aidant de nombreux indivisaires à sortir de situations souvent très difficiles.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Notre longue expérience dans le domaine immobilier a conduit notre groupe à créer Patrimoine Indivis qui intègre une <strong className="text-foreground">équipe d'experts</strong> autour des problèmes liés à l'<strong className="text-foreground">indivision immobilière</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Au cœur de notre métier nous avons pendant toutes ces années, suite à des successions, accompagné et aidé de nombreux indivisaires à sortir de situations parfois difficiles.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={buildingImage}
                alt="Architecture parisienne historique"
                className="max-w-xs lg:max-w-sm xl:max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

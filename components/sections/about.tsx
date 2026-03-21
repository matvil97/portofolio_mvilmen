import { SectionTitle } from "@/components/ui/section-title"

export function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="section-container">
        <SectionTitle
          eyebrow="À propos"
          title="Je construis des interfaces claires, modernes et centrées sur l’expérience utilisateur."
          description="Je m’intéresse au développement front-end, au design d’interface et à la création d’expériences web propres, lisibles et performantes."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-medium">Mon approche</h3>
            <p className="mt-4 leading-7 text-zinc-400">
              J’accorde beaucoup d’importance à la simplicité, à la cohérence
              visuelle et à la qualité d’exécution. Mon objectif est de créer
              des interfaces intuitives qui donnent une impression premium dès
              les premières secondes.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-medium">Ce que je recherche</h3>
            <p className="mt-4 leading-7 text-zinc-400">
              Je souhaite développer des projets utiles, progresser sur des
              stacks modernes et collaborer sur des produits digitaux où design,
              performance et expérience utilisateur ont une vraie importance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
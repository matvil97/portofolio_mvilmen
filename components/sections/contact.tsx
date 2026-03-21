import { SectionTitle } from "@/components/ui/section-title"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="section-spacing">
      <div className="section-container">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
          <SectionTitle
            eyebrow="Contact"
            title="Discutons de ton projet."
            description="Tu peux me contacter pour une collaboration, une mission freelance ou simplement pour échanger autour du développement web."
          />

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full">
              <a href="mailto:vilmenmatthieu@gmail.com">Envoyer un email</a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/15 bg-transparent text-white hover:bg-white/10"
            >
              <a href="https://github.com/matvil97" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/15 bg-transparent text-white hover:bg-white/10"
            >
              <a href="https://www.linkedin.com/in/matthieu-vilmen-b2827b202/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
import { SectionTitle } from "@/components/ui/section-title"
import { Badge } from "@/components/ui/badge"

const skillGroups = {
  "Front-end": [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  UI: ["shadcn/ui", "Motion", "Responsive Design", "UI/UX", "Figma"],
  Outils: ["Git", "GitHub", "Node.js"],
}

export function Skills() {
  return (
    <section id="skills" className="section-spacing">
      <div className="section-container">
        <SectionTitle
          eyebrow="Compétences"
          title="Une stack moderne pour concevoir des interfaces rapides et élégantes."
          description="J’utilise des outils actuels pour créer des interfaces cohérentes, responsive et maintenables."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(skillGroups).map(([group, items]) => (
            <div
              key={group}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="mb-4 text-lg font-semibold">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
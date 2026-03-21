"use client"

import { motion } from "motion/react"
import { projects } from "@/app/data/portfolio"
import { SectionTitle } from "@/components/ui/section-title"
import { Card } from "@/components/ui/card"

export function Projects() {
  return (
    <section id="projects" className="section-spacing">
      <div className="section-container">
        <SectionTitle
          eyebrow="Projets"
          title="Une sélection de projets récents."
          description="Des interfaces pensées pour allier esthétique, clarté et impact."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full overflow-hidden rounded-3xl border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                
                {/* IMAGE / PREVIEW */}
                <div className="relative h-[180px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-cyan-400/10 group-hover:scale-105 transition-transform duration-500" />
                  
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-zinc-400 opacity-0 group-hover:opacity-100 transition">
                    Voir le projet →
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
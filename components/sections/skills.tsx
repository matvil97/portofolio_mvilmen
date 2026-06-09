"use client"

import { motion } from "motion/react"
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiFigma,
  SiGit,
  SiGithub,
  SiNodedotjs,
} from "react-icons/si"
import { SectionTitle } from "@/components/ui/section-title"

type Skill = {
  name: string
  icon?: React.ReactNode
}

const skillGroups: { label: string; skills: Skill[] }[] = [
  {
    label: "Front-end",
    skills: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-400" /> },
      { name: "CSS", icon: <SiCss className="text-blue-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
    ],
  },
  {
    label: "UI / Design",
    skills: [
      { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
      { name: "Motion", icon: <SiFramer className="text-violet-400" /> },
      { name: "shadcn/ui" },
      { name: "Responsive" },
      { name: "UI/UX" },
    ],
  },
  {
    label: "Outils",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="section-spacing">
      <div className="section-container">
        <SectionTitle
          eyebrow="Compétences"
          title="Une stack moderne pour concevoir des interfaces rapides et élégantes."
          description="J'utilise des outils actuels pour créer des interfaces cohérentes, responsive et maintenables."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-violet-400">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:border-white/20 hover:bg-white/10"
                  >
                    {skill.icon && (
                      <span className="text-base leading-none">{skill.icon}</span>
                    )}
                    <span className="text-sm text-zinc-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

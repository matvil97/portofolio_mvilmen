"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="section-container grid min-h-[80vh] items-center gap-12 py-16 md:grid-cols-2 md:py-24">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-violet-400"
        >
          Développeur front-end / web
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl"
        >
          Matthieu Vilmen
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400"
        >
          Je conçois et développe des interfaces modernes, simples et efficaces.
          J’aime créer des expériences web fluides, élégantes et pensées dans
          les détails.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Button asChild size="lg" className="rounded-full">
            <a href="#projects">Voir mes projets</a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <a href="#contact">Me contacter</a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative flex justify-center md:justify-end"
      >
        <div className="relative h-[280px] w-[280px] rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-xl md:h-[380px] md:w-[380px]">
          <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
            <Image
              src="./app/public/img_mv.png"
              alt="Photo de Matthieu Vilmen"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-r from-violet-500/20 to-cyan-400/20 blur-3xl" />
        </div>
      </motion.div>
    </section>
  )
}
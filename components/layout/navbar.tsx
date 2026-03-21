"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"

const links = [
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl"
    >
      <div className="section-container flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-[0.2em]">
          MATTHIEU VILMEN
        </Link>

        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button asChild className="rounded-full">
          <a href="#contact">Me contacter</a>
        </Button>
      </div>
    </motion.header>
  )
}
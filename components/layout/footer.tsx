export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-container flex flex-col gap-3 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Matthieu Vilmen. Tous droits réservés.</p>

        <div className="flex gap-4">
          <a
            href="https://github.com/matvil97"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
          <a
            href="www.linkedin.com/in/matthieu-vilmen-b2827b202"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="mailto:vilmenmatthieu@gmail.com"
            className="transition hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
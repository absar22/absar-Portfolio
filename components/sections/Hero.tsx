'use client'

import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="panel relative overflow-hidden p-8 sm:p-10 md:p-14"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.14),_transparent_30%)]" />

          <div className="relative max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">Full Stack Developer</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Hi, I&apos;m Absar
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:text-2xl md:leading-10">
              Front-end obsessed Fullstack Dev crafting sleek UIs by day, mastering
              Software Architecture by night. Let&apos;s connect on{' '}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                LinkedIn
              </a>
              .
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 hover:bg-zinc-200"
              >
                View projects
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/5"
              >
                Explore profile
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <span className="chip">Next.js</span>
              <span className="chip">TypeScript</span>
              <span className="chip">Tailwind CSS</span>
              <span className="chip">Framer Motion</span>
            </div>
          </div>

          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.4 }}
            className="relative mt-16 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
          >
            Scroll to learn more
            <ArrowDownRight className="h-4 w-4 rotate-45" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

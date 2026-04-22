'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const lifeSquares = [
  { label: 'Years Experience', value: '3+', icon: '◈' },
  { label: 'Projects Completed', value: '20+', icon: '◉' },
  { label: 'Happy Clients', value: '15+', icon: '◇' },
  { label: 'Coffee Cups', value: '∞', icon: '◎' },
]

export const About = () => {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="about" className="py-24">
      <div className="section-shell">
        <div className="grid gap-16 md:grid-cols-2 md:items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label mb-4">About me</p>
            <h2 className="section-title mb-6">
              Building the web,{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                pixel by pixel
              </span>
            </h2>

            {/* Decorative line */}
            <div className="mb-6 h-px w-full bg-gradient-to-r from-indigo-500/40 via-violet-500/20 to-transparent" />

            <p className="leading-8 text-zinc-400">
              I&apos;m a Fullstack Web Developer with 3+ years of experience focused on the
              Front-End. I specialize in building high-performance, accessible interfaces
              using <span className="text-zinc-200">React</span>,{' '}
              <span className="text-zinc-200">Next.js</span>,{' '}
              <span className="text-zinc-200">Astro</span>, and{' '}
              <span className="text-zinc-200">TypeScript</span>.
            </p>
            <p className="mt-4 leading-8 text-zinc-500">
              Currently deep-diving into Backend Engineering and Software Design to bridge
              the gap between sleek UI and robust Node.js/PostgreSQL systems — while
              exploring motion design to push the modern web forward.
            </p>

            {/* Terminal-style status bar */}
            <div className="mt-8 rounded-xl border border-white/5 bg-white/[0.02] p-4 font-mono text-xs">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-400/60" />
                <span className="h-2 w-2 rounded-full bg-amber-400/60" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/60" />
              </div>
              <p className="text-emerald-400/80">
                <span className="text-zinc-600">$</span> status --current
              </p>
              <p className="mt-1 text-zinc-400">
                › Learning: <span className="text-cyan-400">Node.js architecture</span>
              </p>
              <p className="text-zinc-400">
                › Building:{' '}
                <span className="text-indigo-400">fullstack projects</span>
              </p>
              <p className="text-zinc-400">
                › Open to:{' '}
                <span className="text-emerald-400">new opportunities ✓</span>
              </p>
            </div>
          </motion.div>

          {/* Right — stats grid */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="section-label mb-4"
            >
              By the numbers
            </motion.p>
            <div className="grid grid-cols-2 gap-4">
              {lifeSquares.map((sq, i) => (
                <motion.div
                  key={sq.label}
                  initial={{ opacity: 0, scale: 0.88, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.2 + i * 0.08,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-6 text-center transition-colors hover:border-indigo-500/20 hover:bg-indigo-500/5"
                >
                  {/* Corner glow on hover */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <p className="mb-1 font-mono text-xl text-indigo-400/50">{sq.icon}</p>
                  <p className="font-display text-4xl font-black tracking-tight text-white md:text-5xl">
                    {sq.value}
                  </p>
                  <p className="mt-2 text-xs tracking-[0.12em] text-zinc-500 uppercase">
                    {sq.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
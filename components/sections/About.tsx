'use client'

import { motion } from 'framer-motion'

const lifeSquares = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Completed', value: '20+' },
  { label: 'Happy Clients', value: '15+' },
  { label: 'Coffee Cups', value: '∞' },
]

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-2"
        >
          <div>
            <h2 className="section-title">About</h2>
            <p className="section-copy mt-6 max-w-2xl">
              I&apos;m a Fullstack Web Developer with 3+ years of experience focused on the
              Front-End. I specialize in building high-performance, accessible interfaces
              using React, Next.js, Astro, and TypeScript. Currently, I am deep-diving
              into Backend Engineering and Software Design to bridge the gap between sleek
              UI and robust Node.js/PostgreSQL systems, while exploring motion design to
              push the modern web forward.
            </p>
          </div>

          <div>
            <h3 className="section-title text-2xl md:text-3xl">Life in Squares</h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {lifeSquares.map((square, idx) => (
                <motion.div
                  key={square.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="panel p-6 text-center"
                >
                  <div className="text-3xl font-semibold text-white md:text-4xl">{square.value}</div>
                  <div className="mt-2 text-sm text-zinc-400">{square.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

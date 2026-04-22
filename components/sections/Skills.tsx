'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = {
  Languages: {
    icon: '{ }',
    color: 'from-indigo-400 to-violet-400',
    glow: 'rgba(99,102,241,0.15)',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Node.js', 'HTML5', 'CSS3'],
  },
  Frontend: {
    icon: '◈',
    color: 'from-cyan-400 to-blue-400',
    glow: 'rgba(6,182,212,0.15)',
    items: ['Next.js 14', 'React', 'Redux Toolkit', 'TailwindCSS'],
  },
  Backend: {
    icon: '⬡',
    color: 'from-violet-400 to-fuchsia-400',
    glow: 'rgba(167,139,250,0.15)',
    items: ['Express.js', 'EJS', 'REST APIs', 'MVC Architecture'],
  },
  Databases: {
    icon: '◉',
    color: 'from-emerald-400 to-teal-400',
    glow: 'rgba(16,185,129,0.15)',
    items: ['MongoDB', 'PostgreSQL (basic)'],
  },
  Tools: {
    icon: '◧',
    color: 'from-amber-400 to-orange-400',
    glow: 'rgba(245,158,11,0.15)',
    items: ['Git', 'GitHub', 'VS Code', 'Netlify', 'Render', 'Postman', 'Chrome DevTools'],
  },
  Concepts: {
    icon: '◌',
    color: 'from-rose-400 to-pink-400',
    glow: 'rgba(244,63,94,0.15)',
    items: ['CRUD Operations', 'Async Programming', 'WebSockets', 'Agile (SCRUM)'],
  },
}

export const Skills = () => {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="skills" className="border-t border-white/5 py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-4">Technical arsenal</p>
          <h2 className="section-title mb-4">
            Skills &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="section-copy mb-14">
            Tools and technologies I wield to ship high-quality software.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(skills).map(([category, { icon, color, glow, items }], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 + idx * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.025] p-6 transition-colors hover:border-white/10"
              style={{ '--glow': glow } as React.CSSProperties}
            >
              {/* Background glow */}
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: glow }}
              />

              {/* Header */}
              <div className="mb-5 flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${color} font-mono text-sm font-bold text-white shadow-lg`}
                >
                  {icon}
                </span>
                <h3
                  className={`bg-gradient-to-r ${color} bg-clip-text font-display text-base font-bold tracking-tight text-transparent`}
                >
                  {category}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/5 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-zinc-400 transition-colors hover:border-white/10 hover:text-zinc-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const education = [
  {
    school: 'Mewar University',
    location: 'Chittorgarh, Rajasthan',
    degree: 'B.Tech — Computer Science & Engineering',
    period: 'Aug 2021 – May 2024',
    duration: '2 years 9 months',
    summary:
      'Built a strong foundation in computer science fundamentals including data structures, algorithms, and software engineering. Gained practical experience through academic projects and hands-on full-stack development work.',
    level: 'Bachelor\'s Degree',
    accent: 'from-indigo-400 to-violet-400',
    dot: 'bg-indigo-400',
  },
  {
    school: 'Mewar University',
    location: 'Chittorgarh, Rajasthan',
    degree: 'Diploma — Computer Science & Engineering',
    period: 'Aug 2017 – May 2020',
    duration: '2 years 9 months',
    summary:
      'Developed core programming skills and understanding of computer systems, databases, and web technologies, forming the base for advanced software development learning.',
    level: 'Diploma',
    accent: 'from-cyan-400 to-blue-400',
    dot: 'bg-cyan-400',
  },
]

export const Education = () => {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="education" className="py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-4">Academic background</p>
          <h2 className="section-title">
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((item, idx) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + idx * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.025] p-7 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
            >
              {/* Gradient top bar */}
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${item.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="mb-2 inline-block rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 font-mono text-[10px] tracking-[0.15em] text-zinc-500 uppercase">
                    {item.level}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-white">
                    {item.school}
                  </h3>
                  <p className="mt-0.5 font-mono text-[11px] tracking-[0.12em] text-zinc-600">
                    {item.location}
                  </p>
                  <p className={`mt-2 bg-gradient-to-r ${item.accent} bg-clip-text text-sm font-semibold text-transparent`}>
                    {item.degree}
                  </p>
                </div>

                <div className="shrink-0 text-right">
                  <span className="inline-block rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-zinc-400">
                    {item.period}
                  </span>
                  <p className="mt-1.5 font-mono text-[10px] tracking-[0.12em] text-zinc-600 uppercase">
                    {item.duration}
                  </p>
                </div>
              </div>

              <div className="mt-5 h-px bg-white/5" />
              <p className="mt-4 text-sm leading-7 text-zinc-400">{item.summary}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    company: 'Awwaltech',
    period: 'November 2025 – April 2026',
    role: 'Front-end Developer Intern',
    duration: '6 months',
    accent: 'from-indigo-400 to-violet-400',
    dot: 'bg-indigo-400',
    summary:
      'Engineered scalable web applications using Next.js 14 and TypeScript, focusing on performance and maintainability. Implemented global state management with Redux Toolkit and integrated REST APIs with robust loading and error handling strategies. Built real-time features using WebSockets and collaborated closely with backend teams to design efficient, scalable API flows.',
    extra:
      'Contributed to improving developer experience by enforcing clean code practices and modular design. Actively participated in Agile workflows, ensuring timely delivery of features while maintaining high code quality and consistency across the codebase.',
    tags: ['Next.js 14', 'TypeScript', 'Redux Toolkit', 'WebSockets', 'REST APIs'],
  },
  {
    company: '#100Devs',
    period: 'June 2022 – October 2025',
    role: 'Software Engineer',
    duration: '3 years 4 months',
    accent: 'from-cyan-400 to-blue-400',
    dot: 'bg-cyan-400',
    summary:
      'Spearheaded the development and optimization of static HTML pages using Tailwind CSS, crafting scalable templates for a pre-existing page builder. Boosted page load speed by 20%. Built full-stack applications implementing complete CRUD functionality with REST APIs. Designed backend routes, controllers, and database schemas following MVC principles.',
    extra:
      'Improved template customization features, driving a 15% increase in user satisfaction based on platform feedback. Worked in an Agile environment delivering sprint-based features with version control best practices.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'REST APIs', 'MVC'],
  },
]

export const Experience = () => {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="experience" className="border-t border-white/5 py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-4">Where I've worked</p>
          <h2 className="section-title">
            Work{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-500/30 via-violet-500/20 to-transparent md:block" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, x: -32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + idx * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative md:pl-14"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-7 hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-zinc-900 md:flex`}
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${exp.dot} shadow-[0_0_8px_2px] shadow-current`} />
                </div>

                {/* Card */}
                <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.025] p-7 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]">
                  {/* Gradient bar top */}
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${exp.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3
                        className={`bg-gradient-to-r ${exp.accent} bg-clip-text font-display text-xl font-bold tracking-tight text-transparent`}
                      >
                        {exp.company}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-zinc-300">{exp.role}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="inline-block rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-zinc-400">
                        {exp.period}
                      </span>
                      <p className="mt-1.5 font-mono text-[10px] tracking-[0.15em] text-zinc-600 uppercase">
                        {exp.duration}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 h-px bg-white/5" />

                  <p className="mt-4 text-sm leading-7 text-zinc-400">{exp.summary}</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-500">{exp.extra}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
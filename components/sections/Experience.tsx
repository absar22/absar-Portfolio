'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    marker: 'T',
    company: 'Taeyen',
    period: 'August 2025 - February 2026',
    role: 'Front-end Developer',
    duration: '6 mos',
    summary:
      'Engineered a high-performance Client Dashboard and Agency module using Next.js, optimizing the architecture with App Router and Server Components to achieve a 30% reduction in load times. Established scalable coding standards and a modular project structure that minimized technical debt and streamlined team collaboration. Integrated robust bug fixes and stable UI components, resulting in a 40% increase in platform stability.',
    extra:
      'These architectural enhancements significantly improved long-term maintainability and reduced developer onboarding time across the codebase.',
  },
  {
    marker: 'N',
    company: 'NinjaBages',
    period: 'June 2024 - October 2024',
    role: 'Front-end Developer',
    duration: '4 mos',
    summary:
      'Spearheaded the development and optimization of static HTML pages using Tailwind CSS, crafting scalable templates for a pre-existing page builder. Integrated dynamic UI components with rigorous testing to ensure compatibility within the builder. Boosted page load speed by 20%, enhancing overall responsiveness.',
    extra:
      'Improved template customization features, driving a 15% increase in user satisfaction based on platform feedback.',
  },
]

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Work Experience</h2>

          <div className="mt-10 space-y-6">
            {experiences.map((exp, idx) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="panel p-6 md:p-8"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{exp.marker}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{exp.company}</h3>
                    <p className="mt-2 text-zinc-300">{exp.role}</p>
                  </div>

                  <div className="text-sm text-zinc-400 md:text-right">
                    <p>{exp.period}</p>
                    <p className="mt-1">{exp.duration}</p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-zinc-400 md:text-base">{exp.summary}</p>
                <p className="mt-4 text-sm leading-7 text-zinc-400 md:text-base">{exp.extra}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

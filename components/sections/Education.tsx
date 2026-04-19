'use client'

import { motion } from 'framer-motion'

const education = [
  {
    school: 'Mewar University, Chittorgarh, Rajasthan',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    period: 'Aug 2021 – May 2024',
    duration: '2 years 9 months',
    summary:
      'Built a strong foundation in computer science fundamentals including data structures, algorithms, and software engineering. Gained practical experience through academic projects and hands-on full-stack development work.',
  },
  {
    school: 'Mewar University, Chittorgarh, Rajasthan',
    degree: 'Diploma in Computer Science and Engineering',
    period: 'Aug 2017 – May 2020',
    duration: '2 years 9 months',
    summary:
      'Developed core programming skills and understanding of computer systems, databases, and web technologies, forming the base for advanced software development learning.',
  },
]

export const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Education</h2>

          <div className="mt-10 space-y-6">
            {education.map((item, idx) => (
              <motion.article
                key={item.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="panel p-6 md:p-8"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">T</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{item.school}</h3>
                    <p className="mt-2 text-zinc-300">{item.degree}</p>
                  </div>

                  <div className="text-sm text-zinc-400 md:text-right">
                    <p>{item.period}</p>
                    <p className="mt-1">{item.duration}</p>
                  </div>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 md:text-base">
                  {item.summary}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

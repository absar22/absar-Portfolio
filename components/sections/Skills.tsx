'use client'

import { motion } from 'framer-motion'

const skills = {
  frontend: [
    'React',
    'Next.js',
    'Astro',
    'TypeScript',
    'JavaScript',
    'Apollo Client',
    'TanStack Query',
    'Zustand',
    'Redux',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Material UI',
    'Shadcn UI',
    'Framer Motion',
    'GSAP',
  ],
  backend: ['Node.js', 'Express', 'NestJS', 'GraphQL', 'REST APIs', 'Socket.IO'],
  database: ['PostgreSQL', 'Redis', 'Prisma', 'MySQL'],
  devops: ['Docker', 'Git', 'CI/CD'],
}

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="panel p-6"
              >
                <h3 className="text-xl font-semibold capitalize text-white">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

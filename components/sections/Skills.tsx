'use client'

import { motion } from 'framer-motion'

const skills = {
  languages: [
    'JavaScript (ES6+)', 'TypeScript', 'Node.js', 'HTML5', 'CSS3'
  ],
  frontend: [
    'Next.js 14', 'React', 'Redux Toolkit', 'TailwindCSS'
  ],
  backend: [
    'Express.js', 'EJS', 'REST APIs', 'MVC Architecture'
  ],
  databases: [
    'MongoDB', 'PostgreSQL (basic)'
  ],
  tools: [
    'Git', 'GitHub', 'VS Code', 'Netlify', 'Render', 'Postman', 'Chrome DevTools'
  ],
  concepts: [
    'CRUD Operations', 'Async Programming', 'WebSockets', 'Agile (SCRUM)'
  ]
}

export const Skills = () => {
  return (
    <section id="skills" className="py-20 border-t border-white/5">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
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
'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Awwaltech',
    period: 'November 2025 - April 2026',
    role: 'Front-end Developer Intern',
    duration: '6 months',
    summary:
  'Engineered scalable web applications using Next.js 14 and TypeScript, focusing on performance and maintainability. Implemented global state management with Redux Toolkit and integrated REST APIs with robust loading and error handling strategies. Built real-time features using WebSockets and collaborated closely with backend teams to design efficient, scalable API flows. Enhanced application performance through reusable component architecture and optimized rendering patterns.',

extra:
  'Contributed to improving developer experience by enforcing clean code practices and modular design. Actively participated in Agile workflows, ensuring timely delivery of features while maintaining high code quality and consistency across the codebase.',
      
  },
  {
    company: '#100Devs',
    period: 'June 2022 - October 2025',
    role: 'Software Engineer',
    duration: '3 years and 4 months',
     summary:
    'Spearheaded the development and optimization of static HTML pages using Tailwind CSS, crafting scalable templates for a pre-existing page builder. Integrated dynamic UI components with rigorous testing to ensure compatibility within the builder. Boosted page load speed by 20%, enhancing overall responsiveness. Built full-stack applications implementing complete CRUD functionality with REST APIs. Designed backend routes, controllers, and database schemas following MVC principles. Implemented authentication flows and protected routes using session-based logic. Worked in an Agile environment delivering sprint-based features with version control best practices.',
  extra:
    'Improved template customization features, driving a 15% increase in user satisfaction based on platform feedback.',
}

]

export const Experience = () => {
  return (
    <section id="experience" className="py-20 border-t border-white/5">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Work Experience</h2>

          <div className="mt-10 space-y-12">
            {experiences.map((exp, idx) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-white/5 pb-10 last:border-0"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{exp.company}</h3>
                    <p className="mt-1 text-zinc-300">{exp.role}</p>
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
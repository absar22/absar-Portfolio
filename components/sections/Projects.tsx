'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Taeyen Workforce Platform',
    role: 'Front-end Developer',
    description:
      'A workforce platform inspired by Taeyen, built to connect skilled workers locally and globally. Developed transparent job flows, profiles, and onboarding features. Focused on efficient hiring, trust, and a scalable architecture for both companies and talent.',
    tags: ['Next.js', 'NestJS', 'TypeScript', 'GraphQL', 'Prisma', 'Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Zustand', 'MUI'],
    liveUrl: 'https://taeyen.com',
    githubUrl: '#',
    status: 'Published',
  },
  // ... other projects
]

export const Projects = () => {
  return (
    <section id="work" className="py-20 border-t border-white/5">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">My Projects</p>
          <h2 className="section-title mt-4">Check out my latest work</h2>
          <p className="section-copy mt-4">
            I&apos;ve worked on a variety of projects, from simple websites to complex web
            applications. Here are a few of my favorites.
          </p>
        </motion.div>

        <div className="mt-12 space-y-12">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-white/5 pb-10 last:border-0"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs ${
                        project.status === 'Published'
                          ? 'bg-emerald-500/15 text-emerald-300'
                          : 'bg-amber-500/15 text-amber-300'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">Role: {project.role}</p>
                  <p className="mt-4 text-sm leading-7 text-zinc-400 md:text-base">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-4">
                    {project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-white"
                      >
                        Website <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    {project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-white"
                      >
                        Source <Github className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
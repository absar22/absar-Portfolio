'use client'

import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useRef } from 'react'

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
    accent: 'from-indigo-400 via-violet-400 to-cyan-400',
    index: '01',
  },
  // Add more projects here following the same shape
]

export const Projects = () => {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="work" className="border-t border-white/5 py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="section-label mb-4">Selected work</p>
          <h2 className="section-title mb-4">
            Latest{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="section-copy">
            A curated selection of projects — from lightweight sites to complex
            full-stack applications.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.025] p-8 transition-all duration-500 hover:border-white/10"
            >
              {/* Hover gradient top bar */}
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${project.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              {/* Large index number watermark */}
              <span className="pointer-events-none absolute right-8 top-6 select-none font-display text-[80px] font-black leading-none text-white/[0.03]">
                {project.index}
              </span>

              <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex-1">
                  {/* Title row */}
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                      {project.title}
                    </h3>
                    <span
                      className={`rounded-full px-3 py-0.5 text-[11px] font-medium tracking-wide ${
                        project.status === 'Published'
                          ? 'border border-emerald-500/20 bg-emerald-500/10 text-emerald-300'
                          : 'border border-amber-500/20 bg-amber-500/10 text-amber-300'
                      }`}
                    >
                      ● {project.status}
                    </span>
                  </div>

                  <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-zinc-600 uppercase">
                    Role: {project.role}
                  </p>

                  <p className="max-w-2xl text-sm leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-500 transition-colors hover:border-indigo-500/20 hover:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-6 flex gap-5">
                    {project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                      >
                        <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        Live site
                      </a>
                    )}
                    {project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Source
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
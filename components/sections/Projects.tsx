'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Taeyen Workforce Platform',
    role: 'Front-end Developer',
    description:
      'A workforce platform inspired by Taeyen, built to connect skilled workers locally and globally. Developed transparent job flows, profiles, and onboarding features. Focused on efficient hiring, trust, and a scalable architecture for both companies and talent.',
    tags: [
      'Next.js',
      'NestJS',
      'TypeScript',
      'GraphQL',
      'Prisma',
      'Tailwind CSS',
      'Shadcn UI',
      'Framer Motion',
      'Zustand',
      'MUI',
    ],
    liveUrl: 'https://taeyen.com',
    githubUrl: '#',
    status: 'Published',
    accent: 'from-cyan-400/30 via-sky-500/20 to-transparent',
  },
  {
    title: 'admin-dashboard',
    role: 'Full Stack Developer',
    description:
      'A modern admin dashboard app handling user management, products, and orders. Built with Refine and the latest web stack, it streamlines workflows and features a clean, intuitive interface for fast and simple operations.',
    tags: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Tailwind CSS',
      'Stripe',
      'Shadcn UI',
      'Magic UI',
    ],
    liveUrl: 'https://admin-dashboard-eight-psi-38.vercel.app',
    githubUrl: 'https://github.com',
    status: 'Published',
    accent: 'from-emerald-400/30 via-lime-500/15 to-transparent',
  },
  {
    title: 'Goaluxe',
    role: 'Full Stack Developer',
    description:
      'A goal-tracking platform where users create custom incentives and follow unique productivity journeys. Delivers a gamified approach to goal setting, tailored for self-motivation and ongoing achievement without distractions.',
    tags: [
      'Next.js',
      'TypeScript',
      'MongoDB',
      'Express.js',
      'Redis',
      'Zustand',
      'TanStack Query',
      'Tailwind CSS',
      'Framer Motion',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com',
    status: 'Draft',
    accent: 'from-fuchsia-400/30 via-rose-500/15 to-transparent',
  },
  {
    title: 'LiveDocs',
    role: 'Full Stack Developer',
    description:
      'A collaborative real-time editor allowing multiple users to edit files simultaneously. Seamless document sync, instant changes, and a smooth experience make it a fit for teamwork, note-taking, and live co-authoring.',
    tags: ['Next.js', 'TypeScript', 'Lexical', 'Clerk', 'Liveblocks', 'Tailwind CSS', 'Shadcn UI'],
    liveUrl: 'https://collaborative-editor-rho.vercel.app',
    githubUrl: '#',
    status: 'Published',
    accent: 'from-amber-300/30 via-orange-500/15 to-transparent',
  },
]

export const Projects = () => {
  return (
    <section id="work" className="py-20">
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

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="panel overflow-hidden"
            >
              <div className={`h-44 bg-gradient-to-br ${project.accent}`}>
                <div className="flex h-full items-end p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/45">Project</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs ${
                      project.status === 'Published'
                        ? 'bg-emerald-500/15 text-emerald-300'
                        : 'bg-amber-500/15 text-amber-300'
                    }`}
                  >
                    {project.status}
                  </span>
                  <p className="text-sm text-zinc-400">Role: {project.role}</p>
                </div>

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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

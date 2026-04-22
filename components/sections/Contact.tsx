'use client'

import { motion, useInView } from 'framer-motion'
import { Instagram, Linkedin, Github, Mail } from 'lucide-react'
import { useRef } from 'react'

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: Instagram,
    color: 'hover:border-pink-500/40 hover:bg-pink-500/5 hover:text-pink-300',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: Linkedin,
    color: 'hover:border-blue-500/40 hover:bg-blue-500/5 hover:text-blue-300',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: Github,
    color: 'hover:border-zinc-400/40 hover:bg-zinc-500/5 hover:text-zinc-200',
  },
  {
    label: 'Email',
    href: 'mailto:absarahmad137@gmail.com',
    icon: Mail,
    color: 'hover:border-indigo-500/40 hover:bg-indigo-500/5 hover:text-indigo-300',
  },
]

export const Contact = () => {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="contact" className="border-t border-white/5 py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Big decorative text */}
          <p className="section-label mb-6 justify-center">Get in touch</p>

          <h2 className="font-display text-[clamp(40px,6vw,72px)] font-black leading-[0.95] tracking-[-3px]">
            Let&apos;s build{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              something
            </span>{' '}
            great
          </h2>

          <p className="mx-auto mt-6 max-w-md text-zinc-500">
            Want to chat? Shoot me a DM on Instagram or reach out via any channel
            below. I respond when I can — no soliciting please.
          </p>

          {/* Social icons */}
          <div className="mt-12 flex justify-center gap-3">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                whileHover={{ scale: 1.12, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] text-zinc-400 transition-all duration-200 ${s.color}`}
              >
                <s.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12"
          >
            <a
              href="mailto:absarahmad137@gmail.com?subject=Let's Connect&body=Hi Absar,"
              className="group inline-flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-6 py-4 font-mono text-sm text-zinc-400 transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/5 hover:text-indigo-300"
            >
              <Mail className="h-4 w-4" />
              absarahmad137@gmail.com
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-white/5 pt-8 text-center font-mono text-[11px] tracking-[0.15em] text-zinc-700 uppercase">
        © {new Date().getFullYear()} Absar Ahmad — Built with Next.js &amp; Framer Motion
      </div>
    </section>
  )
}
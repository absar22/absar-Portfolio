'use client'

import { motion } from 'framer-motion'
import { Instagram, Linkedin, Github, Mail } from 'lucide-react'

export const Contact = () => {
  return (
    <section id="contact" className="py-20 border-t border-white/5">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="mt-6 text-sm leading-7 text-zinc-400 md:text-base">
            Want to chat? Just shoot me a dm with a direct question on Instagram and
            I&apos;ll respond whenever I can. I will ignore all soliciting.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-zinc-300 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-zinc-300 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-zinc-300 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-zinc-300 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
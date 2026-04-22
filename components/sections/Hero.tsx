'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import { getAge } from '@/utils/getAge'

export const Hero = () => {
  const [age, setAge] = useState<string | null>(null)
  const containerRef = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })
  const glowX = useTransform(springX, (v) => `${v}px`)
  const glowY = useTransform(springY, (v) => `${v}px`)

  useEffect(() => {
    const update = () => setAge(getAge())
    update()
    const id = setInterval(update, 100)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
    el.addEventListener('mousemove', move)
    return () => el.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  const words = ['Fullstack', 'Developer.']

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden py-32"
    >
      {/* Animated glow that follows cursor */}
      <motion.div
        className="pointer-events-none absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: glowX,
          top: glowY,
          background:
            'radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)',
        }}
      />

      {/* Grid lines background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Corner decorators */}
      <span className="absolute left-8 top-8 text-[10px] font-mono tracking-[0.3em] text-indigo-500/40">
        SYS://PORTFOLIO_V3
      </span>
      <span className="absolute right-8 top-8 text-[10px] font-mono tracking-[0.3em] text-indigo-500/40">
        [READY]
      </span>

      <div className="section-shell relative z-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 inline-flex items-center gap-3 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-medium tracking-[0.2em] text-indigo-300/80 uppercase">
            Available for work
          </span>
        </motion.div>

        {/* Main heading — word-by-word reveal */}
        <h1 className="mb-8 font-display text-[clamp(52px,8vw,96px)] font-black leading-[0.95] tracking-[-4px]">
          {['Hi,', "I'm", 'Absar'].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 48, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mr-[0.2em] inline-block text-white"
            >
              {word}
            </motion.span>
          ))}
          <br />
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mr-[0.2em] inline-block bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {age && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mb-3 font-mono text-xs tracking-[0.25em] text-indigo-400/60 uppercase"
          >
            AGE: {age}
          </motion.p>
        )}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-10 max-w-xl text-lg leading-8 text-zinc-400"
        >
          Front-end obsessed dev crafting sleek UIs by day, mastering software
          architecture by night. Let's connect on{' '}
          <a
            href="https://www.linkedin.com/in/absar22"
            target="_blank"
            rel="noreferrer"
            className="border-b border-indigo-400/40 text-indigo-300 transition-colors hover:border-indigo-300"
          >
            LinkedIn
          </a>
          .
        </motion.p>

        {/* Tech chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mb-12 flex flex-wrap gap-2"
        >
          {['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tag) => (
            <span
              key={tag}
              className="chip group relative cursor-default overflow-hidden text-xs"
            >
              <span className="relative z-10">{tag}</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 transition-transform duration-300 group-hover:translate-x-0" />
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-indigo-400 to-violet-400 transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              View projects
            </span>
            <ArrowDownRight className="relative z-10 h-4 w-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-7 py-3.5 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/40 hover:bg-indigo-500/5 hover:text-white"
          >
            Explore profile
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-20 inline-flex items-center gap-3 text-[11px] font-mono tracking-[0.25em] text-zinc-600 uppercase transition-colors hover:text-zinc-400"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            className="inline-block"
          >
            ↓
          </motion.span>
          SCROLL TO EXPLORE
        </motion.a>
      </div>
    </section>
  )
}
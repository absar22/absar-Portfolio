
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from "../lib/Utils"
import { Toolbar } from '@/components/sections/Toolbar'
import { ThemeProvider } from '@/components/sections/theme-provider'


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Absar Ahmad | Fullstack Developer',
  description: 'Portfolio showcasing my work as a Fullstack Developer',
  keywords: ['Fullstack Developer', 'Portfolio', 'Web Development', 'React', 'Node.js', 'Next.js'],
  icons: '/images/portfolio-icon.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, 'bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100')}>
       
          <ThemeProvider>
          {children}
          <Toolbar />
        </ThemeProvider>
  
      </body>
    </html>
  )
}
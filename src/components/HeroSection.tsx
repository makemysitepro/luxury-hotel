'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface HeroSectionProps {
  title: string
  subtitle: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

const HeroSection = ({
  title,
  subtitle,
  primaryButtonText = 'Get Started',
  primaryButtonLink = '/contact',
  secondaryButtonText = 'Learn More',
  secondaryButtonLink = '/about',
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-royal overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/40" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 py-32 max-w-7xl">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block mb-6"
            >
              <span className="bg-accent/20 backdrop-blur-md text-accent-light px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider border border-accent/30">
                ✨ World-Class Luxury Hotels
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 px-4"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto px-4"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4"
            >
              <Link
                href={primaryButtonLink}
                className="group relative bg-accent hover:bg-accent-dark text-white font-bold px-12 py-5 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-gold hover:scale-110 text-lg overflow-hidden"
              >
                <span className="relative z-10">{primaryButtonText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href={secondaryButtonLink}
                className="group bg-white/10 hover:bg-white/20 text-white font-bold px-12 py-5 rounded-xl transition-all duration-300 backdrop-blur-lg border-2 border-white/30 hover:border-white/60 text-lg hover:scale-110 shadow-xl"
              >
                {secondaryButtonText}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12 text-white/80"
            >
              {[
                { icon: '🏨', label: '500+ Properties' },
                { icon: '🏆', label: 'Award Winning' },
                { icon: '🌟', label: '2M+ Guests' },
                { icon: '💎', label: '5-Star Luxury' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                  <span className="text-sm md:text-base font-semibold group-hover:text-accent transition-colors">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/60 text-4xl cursor-pointer hover:text-accent transition-colors"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection


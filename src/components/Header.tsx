'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Amenities', path: '/services' },
    { name: 'Gallery', path: '/portfolio' },
    { name: 'Rooms & Rates', path: '/pricing' },
    { name: 'Reviews', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-theme-primary shadow-royal py-3'
        : 'backdrop-blur-md shadow-lg py-3'
        }`}
      style={{ backgroundColor: isScrolled ? 'var(--bg-primary)' : 'var(--bg-primary)' }}
    >
      <div className="container-custom px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-dark rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-md">
              <span className="text-xl font-bold text-white">🏨</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">Luxury Hotels</h1>
              <p className="text-xs text-accent font-semibold tracking-wide hidden sm:block">5-Star Experience</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 relative group ${pathname === link.path
                  ? 'text-accent bg-accent/10'
                  : 'text-theme-primary hover:text-accent hover:bg-accent/5'
                  }`}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-accent rounded-t-full"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/contact" className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-gold hover:scale-105 text-sm">
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-12 h-12 flex flex-col items-center justify-center space-y-1.5 group bg-primary/5 hover:bg-primary/10 rounded-lg transition-all"
            aria-label="Toggle menu"
          >
            <span
              className={`w-7 h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
            />
            <span
              className={`w-7 h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                }`}
            />
            <span
              className={`w-7 h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t mt-4"
            style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
          >
            <nav className="container-custom py-6 flex flex-col space-y-2">
              <div className="flex items-center justify-between px-4 mb-4">
                <span className="text-sm font-medium text-theme-secondary">Theme</span>
                <ThemeToggle />
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${pathname === link.path
                    ? 'bg-accent text-white'
                    : 'text-theme-primary hover:bg-accent/5'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary mt-4">
                Book Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header


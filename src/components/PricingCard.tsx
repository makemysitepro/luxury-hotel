'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface PricingCardProps {
  name: string
  price: string
  period: string
  features: string[]
  popular?: boolean
  delay?: number
}

const PricingCard = ({ name, price, period, features, popular = false, delay = 0 }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className={`relative p-8 rounded-2xl card-hover ${popular
          ? 'gradient-royal text-white shadow-gold border-2 border-accent'
          : 'theme-card shadow-royal'
        }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-gold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className={`text-2xl font-bold mb-2 ${popular ? 'text-white' : 'text-primary'}`}>
        {name}
      </h3>
      <div className="mb-6">
        <span className={`text-5xl font-bold ${popular ? 'text-accent' : 'text-primary'}`}>
          {price}
        </span>
        <span className={`text-lg ${popular ? 'text-gray-300' : 'text-gray-600'}`}>
          /{period}
        </span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className={`mr-3 ${popular ? 'text-accent' : 'text-accent'}`}>✓</span>
            <span className={popular ? 'text-gray-200' : 'text-gray-600'}>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`block text-center font-semibold px-8 py-3 rounded-lg transition-all duration-300 ${popular
            ? 'bg-accent hover:bg-accent-dark text-white shadow-gold'
            : 'bg-primary hover:bg-primary-light text-white shadow-royal'
          }`}
      >
        Get Started
      </Link>
    </motion.div>
  )
}

export default PricingCard


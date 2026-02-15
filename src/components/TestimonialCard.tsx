'use client'

import { motion } from 'framer-motion'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  rating: number
  delay?: number
}

const TestimonialCard = ({ name, role, company, content, rating, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="theme-card p-8 rounded-2xl shadow-royal card-hover"
    >
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-2xl ${i < rating ? 'text-accent' : 'text-gray-300'}`}>
            ★
          </span>
        ))}
      </div>
      <p className="text-theme-secondary leading-relaxed mb-6 italic">"{content}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-primary">{name}</h4>
          <p className="text-sm text-theme-tertiary">
            {role} at {company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard


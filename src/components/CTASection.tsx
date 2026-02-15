import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface CTASectionProps {
  title: string
  description: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

const CTASection = ({
  title,
  description,
  primaryButtonText = 'Get Started',
  primaryButtonLink = '/contact',
  secondaryButtonText,
  secondaryButtonLink,
}: CTASectionProps) => {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)' }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">{title}</h2>
          <p className="text-xl text-theme-secondary mb-10 leading-relaxed">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={primaryButtonLink}
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 shadow-gold hover:scale-105"
            >
              {primaryButtonText}
            </Link>
            {secondaryButtonText && secondaryButtonLink && (
              <Link
                to={secondaryButtonLink}
                className="btn-outline"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection

import { motion } from 'framer-motion'

interface PortfolioCardProps {
  title: string
  category: string
  description: string
  delay?: number
}

const PortfolioCard = ({ title, category, description, delay = 0 }: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="group relative theme-card rounded-2xl shadow-royal card-hover overflow-hidden"
    >
      <div className="h-64 bg-gradient-to-br from-primary via-primary-light to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: delay + 0.2 }}
            className="w-24 h-24 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white text-4xl"
          >
            🎯
          </motion.div>
        </div>
      </div>
      <div className="p-6">
        <span className="text-accent text-sm font-semibold uppercase tracking-wide">
          {category}
        </span>
        <h3 className="text-2xl font-bold text-primary mt-2 mb-3">{title}</h3>
        <p className="text-theme-secondary leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export default PortfolioCard

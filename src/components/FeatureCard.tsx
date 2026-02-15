import { motion } from 'framer-motion'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  delay?: number
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="text-center p-6"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-royal"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-theme-secondary">{description}</p>
    </motion.div>
  )
}

export default FeatureCard

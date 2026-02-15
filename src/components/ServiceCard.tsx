import { motion } from 'framer-motion'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  delay?: number
}

const ServiceCard = ({ icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="theme-card p-8 rounded-2xl shadow-royal card-hover"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-xl flex items-center justify-center text-3xl mb-6 transform hover:rotate-12 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
      <p className="text-theme-secondary leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default ServiceCard

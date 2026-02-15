'use client'

import { motion } from 'framer-motion'

interface RoomCardProps {
  title: string
  description: string
  price: string
  image: string
  features: string[]
  delay?: number
}

const RoomCard = ({ title, description, price, image, features, delay = 0 }: RoomCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="room-card"
    >
      <div className="room-card-image">
        <img src={image} alt={title} />
        <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full font-bold shadow-lg">
          {price}
        </div>
      </div>
      <div className="room-card-content">
        <h3>{title}</h3>
        <p className="text-theme-secondary mb-4">{description}</p>
        <div className="room-features">
          {features.map((feature, index) => (
            <span key={index} className="feature-tag">
              {feature}
            </span>
          ))}
        </div>
        <button className="btn-primary w-full mt-6">
          Book Now
        </button>
      </div>
    </motion.div>
  )
}

export default RoomCard


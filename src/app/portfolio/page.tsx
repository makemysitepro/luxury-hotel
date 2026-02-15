'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import PortfolioCard from '@/components/PortfolioCard'
import CTASection from '@/components/CTASection'

const Portfolio = () => {
  const projects = [
    {
      title: 'Marriott Grand Resort & Spa',
      category: 'Maldives',
      description: 'Overwater villas with private pools, world-class spa, and breathtaking ocean views. Perfect for romantic getaways and luxury vacations.',
    },
    {
      title: 'Radisson Blu City Center',
      category: 'New York, USA',
      description: 'Modern luxury in the heart of Manhattan. Premium amenities, rooftop bar, and easy access to iconic attractions.',
    },
    {
      title: 'Sayaji Heritage Palace',
      category: 'Jaipur, India',
      description: 'Experience royal hospitality in this magnificent heritage property featuring traditional architecture and modern luxury.',
    },
    {
      title: 'Hyatt Regency Beachfront',
      category: 'Dubai, UAE',
      description: 'Stunning beachfront property with private beach access, infinity pools, and panoramic views of the Arabian Gulf.',
    },
    {
      title: 'Marriott Mountain Lodge',
      category: 'Swiss Alps',
      description: 'Alpine luxury with ski-in/ski-out access, cozy fireplaces, and spectacular mountain vistas in every direction.',
    },
    {
      title: 'Radisson Collection Historic',
      category: 'Paris, France',
      description: 'Elegant Parisian charm meets modern luxury. Steps from the Eiffel Tower with Michelin-starred dining.',
    },
    {
      title: 'Hyatt Urban Retreat',
      category: 'Tokyo, Japan',
      description: 'Contemporary design with traditional Japanese hospitality. Rooftop gardens and authentic cultural experiences.',
    },
    {
      title: 'Sayaji Riverside Resort',
      category: 'Goa, India',
      description: 'Tropical paradise with lush gardens, riverside dining, and authentic coastal cuisine in a serene setting.',
    },
    {
      title: 'Marriott Business Hub',
      category: 'Singapore',
      description: 'State-of-the-art business facilities combined with luxury accommodations in Asia\'s premier business district.',
    },
  ]

  const stats = [
    { number: '500+', label: 'Luxury Properties' },
    { number: '98%', label: 'Guest Satisfaction' },
    { number: '2M+', label: 'Annual Guests' },
    { number: '50+', label: 'Countries' },
  ]

  return (
    <div>
      <HeroSection
        title="Our Properties Gallery"
        subtitle="Explore our stunning collection of luxury hotels across the globe, each offering unique experiences and world-class hospitality."

      />

      <section className="section-padding section-theme-alt">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Global Presence
            </h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
              Our worldwide portfolio of luxury properties
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="stat-box p-8 rounded-2xl shadow-royal text-center card-hover"
              >
                <div className="text-5xl font-bold text-accent mb-3">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most prestigious hotels around the world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <PortfolioCard key={index} {...project} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-theme-alt">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Destinations We Serve
            </h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
              Luxury accommodations in the world's most sought-after locations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              '�️ Beach Resorts',
              '�️ Mountain Retreats',
              '�️ Urban Hotels',
              '🏰 Heritage Properties',
              '🌴 Tropical Islands',
              '❄️ Ski Resorts',
              '🌆 Business Districts',
              '🎭 Cultural Destinations',
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="theme-card p-6 rounded-xl shadow-royal text-center font-semibold text-primary cursor-pointer"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Book Your Dream Stay?"
        description="Explore our collection of luxury properties and find the perfect destination for your next unforgettable experience."
        primaryButtonText="Book Now"
        secondaryButtonText="View Amenities"
        secondaryButtonLink="/services"
      />
    </div>
  )
}

export default Portfolio


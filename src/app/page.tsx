'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import FeatureCard from '@/components/FeatureCard'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import CTASection from '@/components/CTASection'
import RoomCard from '@/components/RoomCard'

const Home = () => {
  const rooms = [
    {
      title: 'Deluxe Ocean View Suite',
      description: 'Spacious suite with panoramic ocean views, king-size bed, and private balcony.',
      price: '$299/night',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      features: ['Ocean View', 'King Bed', 'Balcony', 'Mini Bar'],
    },
    {
      title: 'Presidential Suite',
      description: 'Ultimate luxury with separate living area, dining room, and premium amenities.',
      price: '$1,299/night',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
      features: ['2 Bedrooms', 'Butler Service', 'Jacuzzi', 'City View'],
    },
    {
      title: 'Executive Business Suite',
      description: 'Perfect for business travelers with workspace, lounge access, and modern tech.',
      price: '$599/night',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
      features: ['Work Desk', 'Lounge Access', 'High-Speed WiFi', 'Meeting Room'],
    },
  ]

  const features = [
    { icon: '🏨', title: 'Luxury Suites', description: 'Elegantly designed rooms with world-class amenities and stunning views' },
    { icon: '🍽️', title: 'Fine Dining', description: 'Michelin-star restaurants serving exquisite international cuisine' },
    { icon: '🏊', title: 'Premium Facilities', description: 'State-of-the-art spa, infinity pools, and fitness centers' },
    { icon: '🌟', title: '5-Star Service', description: 'Exceptional hospitality that exceeds all expectations' },
  ]

  const services = [
    {
      icon: '�️',
      title: 'Concierge Services',
      description: 'Personalized 24/7 assistance for all your needs, from reservations to exclusive experiences.',
    },
    {
      icon: '🎉',
      title: 'Event & Banquets',
      description: 'Elegant venues and professional planning for weddings, conferences, and special celebrations.',
    },
    {
      icon: '�',
      title: 'Spa & Wellness',
      description: 'Rejuvenating treatments, therapeutic massages, and holistic wellness programs.',
    },
  ]

  const testimonials = [
    {
      name: 'Emily Thompson',
      role: 'Travel Blogger',
      company: 'Luxury Escapes',
      content: 'An absolutely magnificent stay! The attention to detail, impeccable service, and luxurious amenities made this the best hotel experience of my life.',
      rating: 5,
    },
    {
      name: 'James Anderson',
      role: 'Business Executive',
      company: 'Fortune Global',
      content: 'Perfect blend of business and leisure. The conference facilities are world-class, and the spa helped me unwind after long meetings.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Destination Wedding Planner',
      company: 'Elite Events',
      content: 'We hosted our dream wedding here. The banquet team was exceptional, the venue breathtaking, and every moment was pure magic!',
      rating: 5,
    },
  ]

  return (
    <div>
      <HeroSection
        title="Experience Luxury Beyond Imagination"
        subtitle="Discover world-class hospitality at our prestigious 5-star hotels. From Marriott to Radisson, experience unparalleled elegance, comfort, and service."
        primaryButtonText="Book Your Stay"
        secondaryButtonText="Explore Hotels"
        secondaryButtonLink="/services"
      />

      <section className="py-12 bg-theme-primary" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-sm text-theme-tertiary font-semibold uppercase tracking-wider">Featured International Hotel Brands</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { name: 'Marriott Hotels', icon: '�' },
              { name: 'Radisson Blu', icon: '�' },
              { name: 'Sayaji Hotels', icon: '�' },
              { name: 'Hyatt Regency', icon: '💎' },
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:bg-accent/5 transition-all"
              >
                <div className="text-4xl mb-2">{client.icon}</div>
                <p className="text-theme-secondary font-semibold">{client.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-theme-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-accent/10 text-accent px-6 py-2 rounded-full font-semibold text-sm mb-6"
            >
              ✨ 500+ Luxury Properties Worldwide
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Why Choose <span className="text-gradient">Our Hotels</span>
            </h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of luxury, comfort, and world-class hospitality at our prestigious properties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 0.1} />
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-accent/10 text-accent px-6 py-2 rounded-full font-semibold text-sm mb-6"
            >
              🛏️ Luxury Accommodations
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Our Signature Rooms
            </h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
              Experience unparalleled comfort in our meticulously designed suites and rooms
            </p>
          </motion.div>

          <div className="gallery-grid">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} delay={index * 0.15} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/pricing" className="btn-primary">
              View All Rooms & Rates
            </Link>
          </motion.div>
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold text-sm mb-6"
            >
              🏆 Premium Hospitality
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Exclusive Hotel Services
            </h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
              Comprehensive amenities and services designed to make your stay unforgettable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.15} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/services" className="btn-primary">
              View All Amenities
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-theme-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-accent/10 text-accent px-6 py-2 rounded-full font-semibold text-sm mb-6"
            >
              ⭐ 4.9/5 Average Rating
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Guest Experiences
            </h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
              Discover why travelers worldwide choose our luxury hotels for unforgettable stays
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} delay={index * 0.15} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-theme-alt">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold text-sm mb-6"
              >
                🏆 50+ Years of Hospitality Excellence
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Redefining Luxury Since 1975
              </h2>
              <p className="text-lg text-theme-secondary mb-6 leading-relaxed">
                With over five decades of hospitality excellence, our hotel chain has established itself as a global leader in luxury accommodations. From Marriott to Radisson, Sayaji to Hyatt, we offer unparalleled experiences across the world.
              </p>
              <p className="text-lg text-theme-secondary mb-8 leading-relaxed">
                We combine timeless elegance, modern amenities, and exceptional service to create memorable stays that exceed expectations and create lifelong memories.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-secondary">
                  Discover Our Hotels
                </Link>
                <Link href="/portfolio" className="btn-outline">
                  View Gallery
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: '500+', label: 'Luxury Properties' },
                { number: '2M+', label: 'Happy Guests' },
                { number: '50+', label: 'Countries' },
                { number: '100+', label: 'Hospitality Awards' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="stat-box p-8 rounded-2xl shadow-royal text-center"
                >
                  <div className="stat-number text-5xl mb-3 bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">{stat.number}</div>
                  <div className="stat-label font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Experience Luxury?"
        description="Join millions of satisfied guests who have chosen our world-class hotels for unforgettable stays. Book your dream vacation today."
        primaryButtonText="Book Now"
        secondaryButtonText="View Gallery"
        secondaryButtonLink="/portfolio"
      />
    </div>
  )
}

export default Home


'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import TestimonialCard from '@/components/TestimonialCard'
import CTASection from '@/components/CTASection'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'Travel Enthusiast',
      company: 'Singapore',
      content: 'Absolutely stunning property! The attention to detail, impeccable service, and luxurious amenities exceeded all expectations. This is what 5-star hospitality truly means.',
      rating: 5,
    },
    {
      name: 'Sarah Williams',
      role: 'Honeymoon Guest',
      company: 'United Kingdom',
      content: 'Our honeymoon at the Maldives resort was pure magic. The overwater villa, private pool, and sunset views created memories we\'ll cherish forever.',
      rating: 5,
    },
    {
      name: 'David Martinez',
      role: 'Business Traveler',
      company: 'Spain',
      content: 'Perfect blend of business and leisure. The executive lounge, meeting facilities, and spa services made my extended stay incredibly comfortable.',
      rating: 5,
    },
    {
      name: 'Emily Thompson',
      role: 'Family Vacation',
      company: 'Australia',
      content: 'The kids club was amazing, and the family suite was spacious and elegant. Every staff member went above and beyond to make our vacation special.',
      rating: 5,
    },
    {
      name: 'James Anderson',
      role: 'Anniversary Celebration',
      company: 'Canada',
      content: 'Celebrated our 25th anniversary here. The romantic dinner setup, champagne, and personalized service made it an unforgettable experience.',
      rating: 5,
    },
    {
      name: 'Lisa Roberts',
      role: 'Solo Traveler',
      company: 'USA',
      content: 'Felt safe and pampered throughout my solo trip. The concierge arranged wonderful tours, and the spa treatments were absolutely divine.',
      rating: 5,
    },
    {
      name: 'Robert Kim',
      role: 'Luxury Traveler',
      company: 'South Korea',
      content: 'I\'ve stayed at luxury hotels worldwide, and this ranks among the very best. The presidential suite and butler service were exceptional.',
      rating: 5,
    },
    {
      name: 'Amanda Foster',
      role: 'Destination Wedding',
      company: 'New Zealand',
      content: 'Our wedding was absolutely perfect! The event team handled every detail flawlessly, and our guests are still raving about the experience.',
      rating: 5,
    },
    {
      name: 'Christopher Lee',
      role: 'Frequent Guest',
      company: 'Hong Kong',
      content: 'I stay here regularly for business, and the consistency in service quality is remarkable. The loyalty program benefits are excellent too.',
      rating: 5,
    },
  ]

  const stats = [
    { number: '98%', label: 'Guest Satisfaction' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '2M+', label: 'Happy Guests' },
    { number: '92%', label: 'Return Guests' },
  ]

  return (
    <div>
      <HeroSection
        title="Guest Reviews & Experiences"
        subtitle="Discover why travelers worldwide choose our luxury hotels for unforgettable stays and exceptional hospitality experiences."

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
              Loved by Travelers Worldwide
            </h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
              Our commitment to excellence speaks through our guests' experiences
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
              What Our Guests Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real reviews from real guests who experienced unforgettable stays
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} delay={index * 0.1} />
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
              Guest Satisfaction Metrics
            </h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
              Measurable excellence across our hospitality services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { metric: '99%', label: 'Would Recommend', icon: '📈' },
              { metric: '4.9/5', label: 'Service Quality', icon: '⚡' },
              { metric: '95%', label: 'Cleanliness Rating', icon: '�' },
              { metric: '98%', label: 'Staff Friendliness', icon: '🤝' },
              { metric: '92%', label: 'Repeat Bookings', icon: '🎯' },
              { metric: '4.8/5', label: 'Value for Money', icon: '🚀' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="theme-card p-8 rounded-2xl shadow-royal card-hover text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-4xl font-bold text-accent mb-2">{item.metric}</div>
                <div className="text-theme-secondary font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Create Your Own Story"
        description="Become our next satisfied guest. Book your stay and experience the luxury hospitality that guests rave about."
        primaryButtonText="Book Your Stay"
        secondaryButtonText="View Gallery"
        secondaryButtonLink="/portfolio"
      />
    </div>
  )
}

export default Testimonials


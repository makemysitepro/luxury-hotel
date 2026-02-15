import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import PricingCard from '../components/PricingCard'
import CTASection from '../components/CTASection'

const Pricing = () => {
  const plans = [
    {
      name: 'Deluxe Room',
      price: '$299',
      period: 'night',
      features: [
        'King or Queen Size Bed',
        'City View',
        'Complimentary WiFi',
        'Mini Bar & Coffee Maker',
        'Premium Toiletries',
        'Daily Housekeeping',
      ],
    },
    {
      name: 'Executive Suite',
      price: '$599',
      period: 'night',
      popular: true,
      features: [
        'Separate Living Area',
        'Panoramic City/Ocean View',
        'Premium WiFi',
        'Executive Lounge Access',
        'Complimentary Breakfast',
        'Butler Service',
        'Luxury Bath Amenities',
        'In-Room Dining Priority',
      ],
    },
    {
      name: 'Presidential Suite',
      price: '$1,299',
      period: 'night',
      features: [
        'Multiple Bedrooms & Bathrooms',
        'Private Terrace',
        'Personal Concierge',
        'Spa Access & Treatments',
        'Chauffeur Service',
        'Private Chef Available',
        'VIP Airport Transfer',
        'Exclusive Club Access',
        'Priority Reservations',
      ],
    },
  ]

  const addons = [
    { icon: '💆', title: 'Spa Package', price: '$199' },
    { icon: '🍽️', title: 'Romantic Dinner for Two', price: '$299' },
    { icon: '✈️', title: 'Airport Limousine Service', price: '$149' },
    { icon: '🎉', title: 'Special Celebration Package', price: '$399' },
  ]

  return (
    <div>
      <HeroSection
        title="Rooms & Rates"
        subtitle="Choose the perfect accommodation for your stay. All rooms include our commitment to luxury, comfort, and exceptional service."
        showAnimation={false}
      />

      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Choose Your Room
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Luxury accommodations designed for comfort and elegance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} delay={index * 0.15} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-accent/10 p-8 rounded-2xl"
          >
            <p className="text-lg text-theme-primary mb-4">
              <strong>Planning a long stay?</strong> Contact us for special rates on extended stays and group bookings.
            </p>
            <p className="text-theme-secondary">
              All rates include complimentary WiFi, parking, and access to fitness facilities. Flexible cancellation available.
            </p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Premium Add-Ons
            </h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
              Enhance your stay with exclusive experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addons.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="theme-card p-8 rounded-2xl shadow-royal card-hover text-center"
              >
                <div className="text-5xl mb-4">{addon.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{addon.title}</h3>
                <div className="text-2xl font-bold text-accent">{addon.price}</div>
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
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Can I upgrade my room after booking?',
                answer: 'Yes, you can upgrade your room based on availability. Contact our front desk or concierge for assistance.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, debit cards, and digital payment methods. Deposits may be required for certain bookings.',
              },
              {
                question: 'What is your cancellation policy?',
                answer: 'Free cancellation up to 48 hours before check-in. Late cancellations may incur a one-night charge.',
              },
              {
                question: 'Do you offer loyalty programs?',
                answer: 'Yes, join our rewards program to earn points, enjoy exclusive benefits, and receive special member rates.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="theme-card p-8 rounded-2xl shadow-royal"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{faq.question}</h3>
                <p className="text-theme-secondary leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Book Your Stay?"
        description="Choose your room and experience luxury hospitality at its finest. Our team is ready to welcome you."
        primaryButtonText="Book Now"
        secondaryButtonText="View All Amenities"
        secondaryButtonLink="/services"
      />
    </div>
  )
}

export default Pricing

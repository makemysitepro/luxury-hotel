import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'

const Services = () => {
  const services = [
    {
      icon: '🍽️',
      title: 'Fine Dining Restaurants',
      description: 'Experience culinary excellence at our Michelin-star restaurants featuring international cuisines, private dining rooms, and world-renowned chefs.',
    },
    {
      icon: '�',
      title: 'Luxury Spa & Wellness',
      description: 'Rejuvenate your body and mind with premium spa treatments, therapeutic massages, aromatherapy, and holistic wellness programs.',
    },
    {
      icon: '🏊',
      title: 'Swimming Pools & Fitness',
      description: 'State-of-the-art fitness centers, infinity pools, heated indoor pools, and personal training services for your wellness journey.',
    },
    {
      icon: '�',
      title: 'Event & Banquet Halls',
      description: 'Elegant venues for weddings, conferences, and celebrations with professional event planning and catering services.',
    },
    {
      icon: '🛎️',
      title: '24/7 Concierge Services',
      description: 'Personalized assistance for reservations, tours, transportation, and exclusive experiences throughout your stay.',
    },
    {
      icon: '�',
      title: 'Valet & Transportation',
      description: 'Premium valet parking, airport transfers, luxury car rentals, and chauffeur services for seamless travel.',
    },
    {
      icon: '☕',
      title: 'Lounge & Bar',
      description: 'Sophisticated lounges and bars serving premium cocktails, fine wines, and light refreshments in elegant settings.',
    },
    {
      icon: '�',
      title: 'Recreation & Entertainment',
      description: 'Gaming rooms, kids club, movie theaters, and curated entertainment programs for guests of all ages.',
    },
    {
      icon: '�',
      title: 'Business Center',
      description: 'Fully equipped business facilities with meeting rooms, high-speed internet, and professional support services.',
    },
  ]

  const process = [
    { step: '01', title: 'Reservation', description: 'Book your preferred room and customize your stay preferences' },
    { step: '02', title: 'Welcome', description: 'Seamless check-in with personalized greeting and room orientation' },
    { step: '03', title: 'Experience', description: 'Enjoy world-class amenities and exceptional hospitality' },
    { step: '04', title: 'Memories', description: 'Depart with unforgettable moments and loyalty rewards' },
  ]

  return (
    <div>
      <HeroSection
        title="World-Class Hotel Amenities"
        subtitle="Indulge in exceptional facilities and services designed to make your stay extraordinary at our luxury 5-star properties."
        showAnimation={false}
      />

      <section className="section-padding bg-theme-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Premium Amenities & Services
            </h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
              Comprehensive facilities designed to exceed every expectation during your stay
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
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
              Your Journey With Us
            </h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
              From reservation to departure, we ensure every moment is perfect
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="theme-card p-8 rounded-2xl shadow-royal card-hover">
                  <div className="text-6xl font-bold text-accent/20 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-theme-secondary leading-relaxed">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-accent text-3xl">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-theme-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Why Choose Our Hotels?
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Award-Winning Service', description: '100+ hospitality awards recognizing our excellence' },
                  { title: 'Global Presence', description: '500+ luxury properties across 50+ countries worldwide' },
                  { title: 'Personalized Experience', description: 'Tailored services that cater to your unique preferences' },
                  { title: 'Loyalty Rewards', description: 'Exclusive benefits and upgrades for our valued guests' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-theme-secondary">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="h-96 bg-gradient-to-br from-accent via-accent-light to-accent-dark rounded-3xl shadow-gold flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-9xl"
                >
                  🏨
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Book Your Stay?"
        description="Experience unparalleled luxury and hospitality at our world-class hotels. Reserve your room today and create unforgettable memories."
        primaryButtonText="Book Now"
        secondaryButtonText="View Rooms & Rates"
        secondaryButtonLink="/pricing"
      />
    </div>
  )
}

export default Services

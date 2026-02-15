import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import FeatureCard from '../components/FeatureCard'
import CTASection from '../components/CTASection'

const About = () => {
  const values = [
    { icon: '�', title: 'Excellence', description: 'Unwavering commitment to delivering exceptional hospitality in every stay' },
    { icon: '🤝', title: 'Integrity', description: 'Building trust through transparency, honesty, and genuine care for our guests' },
    { icon: '💡', title: 'Innovation', description: 'Pioneering luxury amenities and services that redefine modern hospitality' },
    { icon: '🌟', title: 'Guest Focus', description: 'Prioritizing guest satisfaction through personalized service and attention' },
  ]

  const team = [
    { name: 'Richard Marriott', role: 'Chairman & CEO', icon: '👔' },
    { name: 'Priya Patel', role: 'Chief Hospitality Officer', icon: '🏨' },
    { name: 'James Radisson', role: 'VP Global Operations', icon: '🌍' },
    { name: 'Elena Sayaji', role: 'Director of Guest Experience', icon: '⭐' },
  ]

  return (
    <div>
      <HeroSection
        title="About Our Luxury Hotels"
        subtitle="Redefining hospitality excellence with world-class properties, exceptional service, and unforgettable experiences since 1975."
        showAnimation={false}
      />

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
                Our Story
              </h2>
              <p className="text-lg text-theme-secondary mb-6 leading-relaxed">
                Founded in 1975, our luxury hotel chain emerged from a vision to revolutionize the hospitality industry. What started as a single boutique property has grown into a globally recognized portfolio of 500+ prestigious hotels, including renowned brands like Marriott, Radisson, Sayaji, and Hyatt.
              </p>
              <p className="text-lg text-theme-secondary mb-6 leading-relaxed">
                Our journey has been marked by continuous innovation, strategic expansion, and an unwavering commitment to guest satisfaction. We've had the privilege of hosting millions of travelers from around the world, creating unforgettable memories and setting new standards in luxury hospitality.
              </p>
              <p className="text-lg text-theme-secondary leading-relaxed">
                Today, our hotel chain stands as a testament to the power of exceptional service, timeless elegance, and a relentless pursuit of excellence. We continue to expand globally, embrace innovation, and redefine what luxury hospitality means.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="h-96 bg-gradient-to-br from-primary via-primary-light to-accent rounded-3xl shadow-royal flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="text-9xl"
                >
                  🏨
                </motion.div>
              </div>
            </motion.div>
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
              Our Core Values
            </h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
              The principles that guide every decision we make and every solution we deliver
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FeatureCard key={index} {...value} delay={index * 0.1} />
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Mission & Vision
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="theme-card p-10 rounded-2xl shadow-royal card-hover"
            >
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-lg text-theme-secondary leading-relaxed">
                To provide world-class hospitality experiences that exceed expectations, create lasting memories, and set the standard for luxury accommodation worldwide. We are committed to delivering excellence through impeccable service, elegant facilities, and genuine care for every guest.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="theme-card p-10 rounded-2xl shadow-royal card-hover"
            >
              <div className="text-6xl mb-6">🔮</div>
              <h3 className="text-3xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-lg text-theme-secondary leading-relaxed">
                To be the world's most beloved luxury hotel chain, recognized globally for our exceptional hospitality, innovation, and commitment to creating extraordinary experiences. We envision a future where every traveler has access to world-class accommodations that feel like a home away from home.
              </p>
            </motion.div>
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
              Leadership Team
            </h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
              Meet the visionaries driving our hospitality excellence forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="theme-card p-8 rounded-2xl shadow-royal card-hover text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-5xl mx-auto mb-6">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-theme-secondary">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Experience Luxury Today"
        description="Be part of something extraordinary. Book your stay at one of our world-class properties and experience hospitality redefined."
        primaryButtonText="Book Now"
        secondaryButtonText="View Properties"
        secondaryButtonLink="/portfolio"
      />
    </div>
  )
}

export default About

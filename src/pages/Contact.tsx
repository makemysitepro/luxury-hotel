import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'

const Contact = () => {
  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['123 Royal Street, Business District', 'New York, NY 10001', 'United States'],
    },
    {
      icon: '📧',
      title: 'Email Us',
      details: ['info@royalenterprise.com', 'support@royalenterprise.com', 'careers@royalenterprise.com'],
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+1 (234) 567-890', '+1 (234) 567-891', 'Mon-Fri: 9AM - 6PM EST'],
    },
    {
      icon: '🌐',
      title: 'Follow Us',
      details: ['LinkedIn: @royalenterprise', 'Twitter: @royalent', 'Instagram: @royalenterprise'],
    },
  ]

  return (
    <div>
      <HeroSection
        title="Get in Touch"
        subtitle="Let's discuss how we can help transform your business with our premium solutions and expert guidance."
        showAnimation={false}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">Send Us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-accent transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-accent transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-accent transition-colors"
                    placeholder="john.doe@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-accent transition-colors"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Service Interest
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-accent transition-colors">
                    <option>Select a service</option>
                    <option>Business Consulting</option>
                    <option>Digital Transformation</option>
                    <option>Analytics & Insights</option>
                    <option>Brand Strategy</option>
                    <option>Process Optimization</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">Contact Information</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help. Reach out through any of these channels.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="theme-card p-6 rounded-2xl shadow-royal card-hover"
                  >
                    <div className="flex items-start">
                      <div className="text-4xl mr-4">{info.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-theme-secondary">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white shadow-royal"
              >
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
                <p className="mt-6 text-sm text-gray-200">
                  * Emergency support available 24/7 for Enterprise clients
                </p>
              </motion.div>
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
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Global Offices
            </h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto mb-12">
              We serve clients worldwide with offices in major business hubs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { city: 'New York', country: 'United States', icon: '🗽' },
                { city: 'London', country: 'United Kingdom', icon: '🏛️' },
                { city: 'Singapore', country: 'Singapore', icon: '🌏' },
              ].map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="theme-card p-8 rounded-2xl shadow-royal card-hover"
                >
                  <div className="text-6xl mb-4">{office.icon}</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{office.city}</h3>
                  <p className="text-theme-secondary">{office.country}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact

'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import BlogCard from '@/components/BlogCard'
import CTASection from '@/components/CTASection'

const Blog = () => {
  const featuredPost = {
    title: 'The Future of Digital Transformation in 2024',
    excerpt: 'Explore the latest trends and strategies shaping the future of business transformation in the digital age.',
    date: 'Feb 10, 2024',
    author: 'Alexander Royal',
    category: 'Digital Strategy',
  }

  const posts = [
    {
      title: 'Building a Data-Driven Culture in Your Organization',
      excerpt: 'Learn how to foster a culture that embraces data analytics and makes informed decisions at every level.',
      date: 'Feb 8, 2024',
      author: 'Victoria Sterling',
      category: 'Analytics',
    },
    {
      title: '5 Key Strategies for Successful Cloud Migration',
      excerpt: 'Essential insights for planning and executing a seamless transition to cloud infrastructure.',
      date: 'Feb 5, 2024',
      author: 'Marcus Wellington',
      category: 'Cloud Technology',
    },
    {
      title: 'The ROI of Business Process Automation',
      excerpt: 'Discover how automation can transform operations and deliver measurable business value.',
      date: 'Feb 1, 2024',
      author: 'Sophia Chambers',
      category: 'Process Optimization',
    },
    {
      title: 'Navigating Regulatory Compliance in 2024',
      excerpt: 'Stay ahead of evolving regulations with our comprehensive compliance framework guide.',
      date: 'Jan 28, 2024',
      author: 'Alexander Royal',
      category: 'Compliance',
    },
    {
      title: 'AI and Machine Learning in Business Strategy',
      excerpt: 'How artificial intelligence is revolutionizing strategic decision-making and operations.',
      date: 'Jan 25, 2024',
      author: 'Victoria Sterling',
      category: 'Artificial Intelligence',
    },
    {
      title: 'Cybersecurity Best Practices for Enterprises',
      excerpt: 'Protect your organization with these essential security measures and protocols.',
      date: 'Jan 22, 2024',
      author: 'Marcus Wellington',
      category: 'Security',
    },
    {
      title: 'Scaling Your Business: A Strategic Roadmap',
      excerpt: 'Proven strategies for sustainable growth and successful business expansion.',
      date: 'Jan 18, 2024',
      author: 'Sophia Chambers',
      category: 'Business Growth',
    },
    {
      title: 'Customer Experience in the Digital Era',
      excerpt: 'Creating exceptional customer journeys through digital innovation and personalization.',
      date: 'Jan 15, 2024',
      author: 'Alexander Royal',
      category: 'Customer Experience',
    },
  ]

  const categories = [
    'All Posts',
    'Digital Strategy',
    'Analytics',
    'Cloud Technology',
    'Process Optimization',
    'Artificial Intelligence',
    'Security',
    'Business Growth',
  ]

  return (
    <div>
      <HeroSection
        title="Insights & Expertise"
        subtitle="Stay informed with the latest trends, strategies, and insights from our team of industry experts."

      />

      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-primary via-primary-light to-accent rounded-3xl p-12 text-white shadow-royal">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-accent-light text-sm font-semibold uppercase tracking-wide mb-4 block">
                    Featured Article
                  </span>
                  <h2 className="text-4xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-200 text-lg mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-6 text-sm">
                    <span>By {featuredPost.author}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.category}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="text-9xl"
                  >
                    📰
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${index === 0
                    ? 'bg-accent text-white shadow-gold'
                    : 'theme-card text-theme-primary hover:bg-accent/5 shadow-royal'
                    }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights to help you stay ahead in today's business landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={index} {...post} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="btn-primary">Load More Articles</button>
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-theme-alt">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get the latest insights, trends, and expert advice delivered directly to your inbox
            </p>
            <div className="max-w-2xl mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:border-accent text-lg"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe Now
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Need Expert Guidance?"
        description="Our team is ready to help you navigate your business challenges with proven strategies and innovative solutions."
        primaryButtonText="Schedule Consultation"
        secondaryButtonText="View Services"
        secondaryButtonLink="/services"
      />
    </div>
  )
}

export default Blog


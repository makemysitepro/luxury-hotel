'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import CTASection from '@/components/CTASection'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What services does Royal Enterprise offer?',
          answer: 'We offer comprehensive business solutions including strategic consulting, digital transformation, analytics, brand strategy, process optimization, and more. Our services are designed to address every aspect of your business needs.',
        },
        {
          question: 'How long has Royal Enterprise been in business?',
          answer: 'Royal Enterprise was founded in 2010 and has been delivering premium business solutions for over 13 years. We have successfully completed 500+ projects for clients worldwide.',
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve diverse industries including financial services, healthcare, manufacturing, retail, technology, automotive, travel, and energy. Our expertise spans across multiple sectors.',
        },
      ],
    },
    {
      category: 'Services & Solutions',
      questions: [
        {
          question: 'How do you customize solutions for different businesses?',
          answer: 'We begin with a comprehensive discovery phase to understand your unique challenges, goals, and requirements. Our team then develops tailored strategies that align with your specific business objectives and industry context.',
        },
        {
          question: 'What is your typical project timeline?',
          answer: 'Project timelines vary based on scope and complexity. Small projects may take 4-8 weeks, while comprehensive transformations can span 6-12 months. We provide detailed timelines during the initial consultation.',
        },
        {
          question: 'Do you provide ongoing support after project completion?',
          answer: 'Yes, we offer comprehensive post-project support including maintenance, optimization, training, and continuous improvement services. Our partnership extends beyond project delivery.',
        },
      ],
    },
    {
      category: 'Pricing & Plans',
      questions: [
        {
          question: 'How does your pricing work?',
          answer: 'We offer flexible pricing models including monthly subscriptions, project-based pricing, and custom enterprise packages. All plans include our commitment to excellence and premium service delivery.',
        },
        {
          question: 'Can I upgrade or downgrade my plan?',
          answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, and we prorate any differences. Downgrades take effect at the next billing cycle.',
        },
        {
          question: 'Do you offer refunds?',
          answer: 'We offer a 30-day money-back guarantee for all subscription plans. For custom projects, refund terms are outlined in the project agreement.',
        },
      ],
    },
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'How do I get started with Royal Enterprise?',
          answer: 'Simply contact us through our website, email, or phone. We will schedule an initial consultation to discuss your needs and recommend the best solutions for your business.',
        },
        {
          question: 'What information do you need to begin?',
          answer: 'We need basic information about your business, current challenges, goals, and timeline. During our discovery phase, we will gather more detailed information to develop your customized solution.',
        },
        {
          question: 'How long does the onboarding process take?',
          answer: 'Our streamlined onboarding process typically takes 1-2 weeks. This includes initial setup, team introductions, and alignment on project goals and deliverables.',
        },
      ],
    },
  ]

  return (
    <div>
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services, processes, and how we can help transform your business."

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
              Everything You Need to Know
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Can't find what you're looking for? Contact our support team for assistance.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <h3 className="text-3xl font-bold text-primary mb-6">{section.category}</h3>
                <div className="space-y-4">
                  {section.questions.map((faq, faqIndex) => {
                    const globalIndex = sectionIndex * 10 + faqIndex
                    const isOpen = openIndex === globalIndex

                    return (
                      <motion.div
                        key={faqIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: faqIndex * 0.05 }}
                        className="theme-card rounded-2xl shadow-royal overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-accent/5 transition-colors"
                        >
                          <span className="text-lg font-bold text-primary pr-4">
                            {faq.question}
                          </span>
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-2xl text-accent flex-shrink-0"
                          >
                            ↓
                          </motion.span>
                        </button>
                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? 'auto' : 0,
                            opacity: isOpen ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-6">
                            <p className="text-theme-secondary leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
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
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto mb-8">
              Our team is here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Contact Support
              </a>
              <a href="mailto:info@royalenterprise.com" className="btn-outline">
                Email Us Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        description="Join hundreds of successful enterprises who have chosen Royal Enterprise for their growth journey."
        primaryButtonText="Schedule Consultation"
        secondaryButtonText="View Pricing"
        secondaryButtonLink="/pricing"
      />
    </div>
  )
}

export default FAQ


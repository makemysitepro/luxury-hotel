import { motion } from 'framer-motion'

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  delay?: number
}

const BlogCard = ({ title, excerpt, date, author, category, delay = 0 }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="theme-card rounded-2xl shadow-royal card-hover overflow-hidden"
    >
      <div className="h-56 bg-gradient-to-br from-accent via-accent-light to-accent-dark relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">
          📰
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-accent text-sm font-semibold uppercase tracking-wide">
            {category}
          </span>
          <span className="text-gray-500 text-sm">{date}</span>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-3 hover:text-accent transition-colors cursor-pointer">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">{excerpt}</p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-600">By {author}</span>
          <button className="text-accent font-semibold hover:text-accent-dark transition-colors">
            Read More →
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default BlogCard

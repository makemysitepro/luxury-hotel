import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
  ]

  const serviceLinks = [
    { name: 'Consulting', path: '/services' },
    { name: 'Development', path: '/services' },
    { name: 'Design', path: '/services' },
    { name: 'Marketing', path: '/services' },
  ]

  return (
    <footer className="bg-theme-primary" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">R</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Royal Enterprise</h3>
                <p className="text-xs text-accent">Premium Solutions</p>
              </div>
            </div>
            <p className="text-theme-secondary mb-6 leading-relaxed">
              Delivering premium corporate solutions with royal excellence and unmatched professional service for global enterprises.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social}
                >
                  <span className="text-sm capitalize text-primary">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-theme-secondary hover:text-accent transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-theme-secondary hover:text-accent transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Contact Info</h4>
            <ul className="space-y-4 text-theme-secondary">
              <li className="flex items-start">
                <span className="mr-3 text-accent">📍</span>
                <span>123 Royal Street, Business District, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-accent">📧</span>
                <a href="mailto:info@royalenterprise.com" className="hover:text-accent transition-colors">
                  info@royalenterprise.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-accent">📞</span>
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-accent">Newsletter</h5>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-accent hover:bg-accent-dark rounded-r-lg transition-colors duration-300 font-semibold"
                >
                  →
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-theme-tertiary text-sm">
              © {currentYear} Royal Enterprise. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-theme-tertiary hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-theme-tertiary hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-theme-tertiary hover:text-accent transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

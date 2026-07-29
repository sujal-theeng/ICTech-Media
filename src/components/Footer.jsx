import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

const quickLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/initiatives', label: 'Initiatives' },
  { to: '/partner', label: 'Partner Portal' },
]

const supportLinks = [
  { to: '/contact', label: 'Contact Us' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
  { to: '/partner', label: 'Become a Partner' },
]

const socialLinks = [
  { href: 'https://facebook.com/ictechmedia', label: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { href: 'https://linkedin.com/company/ictechmedia', label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { href: 'https://twitter.com/ictechmedia', label: 'Twitter', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
]

export default function Footer() {
  const [ref, isVisible] = useInView()

  return (
    <footer ref={ref} className={`bg-deep-charcoal text-white border-t-4 border-primary transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 px-5 md:px-[64px] py-12 md:py-[80px] max-w-[1280px] mx-auto">
        {/* Brand Column */}
        <div className="col-span-1">
          <img
            alt="I C Tech Media Logo"
            className="h-12 w-auto object-contain mb-6"
            src="/LOGO ic tech.jpg"
          />
          <p className="text-white/60 mb-8 leading-relaxed text-[16px]">
            Leading innovation and excellence in Nepal's technology and media landscape through comprehensive digital solutions.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/10 text-secondary flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h4 className="text-[20px] font-bold mb-6 text-white">Quick Links</h4>
          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-white/60 hover:text-secondary inline-block transition-all duration-300 text-[16px] hover:translate-x-1">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="col-span-1">
          <h4 className="text-[20px] font-bold mb-6 text-white">Support</h4>
          <ul className="space-y-4">
            {supportLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-white/60 hover:text-secondary inline-block transition-all duration-300 text-[16px] hover:translate-x-1">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1">
          <h4 className="text-[20px] font-bold mb-6 text-white">Contact Info</h4>
          <ul className="space-y-6">
            <li>
              <a href="https://maps.google.com/?q=27.680185878643883,85.33423052999738" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 w-full group">
                <span className="material-symbols-outlined text-[20px] text-secondary leading-none align-middle transition-transform duration-300 group-hover:scale-110">location_on</span>
                <span className="text-white/60 text-[16px] hover:text-secondary transition-colors duration-300">Shankhamul, Kathmandu, Nepal</span>
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[20px] text-secondary leading-none align-middle">mail</span>
              <a href="mailto:info@ictech.com.np" className="text-white/60 text-[16px] hover:text-secondary transition-colors duration-300">info@ictech.com.np</a>
            </li>
            <li className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[20px] text-secondary leading-none align-middle">call</span>
              <a href="tel:+977015315322" className="text-white/60 text-[16px] hover:text-secondary transition-colors duration-300">+977 01-5315322</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-[12px] text-white/40">
        <p>&copy; {new Date().getFullYear()} I C Tech Media Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  )
}

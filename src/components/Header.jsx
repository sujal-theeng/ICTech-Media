import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/initiatives', label: 'Initiatives' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [clickedLink, setClickedLink] = useState(null)
  const location = useLocation()

  const handleLinkClick = useCallback((to) => {
    setClickedLink(to)
    setTimeout(() => setClickedLink(null), 300)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      {/* Utility Bar */}
      <div className="bg-deep-charcoal text-white py-2 hidden md:block border-b-4 border-secondary">
        <div className="max-w-[1280px] mx-auto px-[64px] flex justify-between items-center text-[12px] tracking-wide">
          <div className="flex items-center gap-6">
            <a href="mailto:info@ictech.com.np" className="flex items-center gap-2 hover-underline hover:text-secondary transition-colors duration-300">
              <span className="material-symbols-outlined text-[16px] text-secondary leading-none align-middle">mail</span>
              info@ictech.com.np
            </a>
            <a href="tel:+977015315322" className="flex items-center gap-2 hover-underline hover:text-secondary transition-colors duration-300">
              <span className="material-symbols-outlined text-[16px] text-secondary leading-none align-middle">call</span>
              +977 01-5315322
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://maps.google.com/?q=27.680185878643883,85.33423052999738" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover-underline hover:text-secondary transition-colors duration-300">
              <span className="material-symbols-outlined text-[16px] leading-none align-middle">location_on</span>
              Shankhamul, Kathmandu
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`bg-surface border-b border-surface-variant sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'shadow-lg shadow-black/5' : 'shadow-none'}`}>
        <div className="flex justify-between items-center w-full px-5 md:px-[64px] max-w-[1280px] mx-auto h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              alt="I C Tech Media Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              src="/LOGO ic tech.jpg"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleLinkClick(link.to)}
                className={`text-[14px] font-semibold py-2 transition-colors duration-300 hover-underline ${
                  location.pathname === link.to
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-deep-charcoal hover:text-primary'
                } ${clickedLink === link.to ? 'nav-click-animate' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              onClick={() => handleLinkClick('/contact')}
              className={`bg-primary text-white px-6 py-2.5 rounded text-[14px] font-semibold btn-press shadow-sm hover:shadow-md ${clickedLink === '/contact' ? 'nav-click-animate' : ''}`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-deep-charcoal hover:text-primary transition-colors duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div id="mobile-menu" className="md:hidden bg-surface border-t border-surface-variant shadow-lg animate-slide-down" role="navigation" aria-label="Mobile navigation">
            <nav className="flex flex-col px-5 py-4 gap-1">
              {navLinks.map((link, i) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => handleLinkClick(link.to)}
                  className={`py-3 px-4 rounded text-[16px] font-medium transition-all duration-300 ${
                    location.pathname === link.to
                      ? 'text-primary bg-surface-container-low'
                      : 'text-deep-charcoal hover:text-primary hover:bg-surface-container-low'
                  } ${clickedLink === link.to ? 'nav-click-animate' : ''}`}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => handleLinkClick('/contact')}
                className={`mt-3 bg-primary text-white px-6 py-3 rounded text-[14px] font-semibold text-center btn-press ${clickedLink === '/contact' ? 'nav-click-animate' : ''}`}
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

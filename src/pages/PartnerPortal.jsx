import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

const benefits = [
  { icon: 'handshake', title: 'Co-Branding Opportunities', description: 'Feature your brand alongside I C Tech Media at our events and digital platforms.' },
  { icon: 'campaign', title: 'Event Sponsorship', description: 'Gain visibility through our flagship events including ICT Award, Startup Fest, and Digital Nepal Summit.' },
  { icon: 'groups', title: 'Network Access', description: 'Connect with Nepal\'s top tech leaders, entrepreneurs, and policymakers through exclusive partner events.' },
  { icon: 'trending_up', title: 'Growth Exposure', description: 'Reach a targeted audience of tech professionals and innovators across Nepal and South Asia.' },
]

const tiers = [
  {
    name: 'Bronze',
    price: 'NPR 1,00,000',
    period: '/year',
    features: ['Logo on event banners', 'Social media mentions', 'Newsletter feature', 'Event invitations (2 seats)'],
    highlighted: false,
  },
  {
    name: 'Silver',
    price: 'NPR 3,00,000',
    period: '/year',
    features: ['All Bronze benefits', 'Speaking slot at events', 'Logo on website partners section', 'Dedicated social media post', 'Event invitations (5 seats)'],
    highlighted: true,
  },
  {
    name: 'Gold',
    price: 'NPR 5,00,000',
    period: '/year',
    features: ['All Silver benefits', 'Main stage branding', 'Exclusive networking dinner', 'Priority media coverage', 'Event invitations (10 seats)', 'Annual feature article'],
    highlighted: false,
  },
]

function SectionReveal({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useInView()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function PartnerPortal() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Helmet>
        <title>Partner Portal - I C Tech Media Pvt. Ltd.</title>
        <meta name="description" content="Partner with I C Tech Media. Explore sponsorship and partnership opportunities for events, media, and digital platforms in Nepal." />
        <meta property="og:title" content="Partner Portal - I C Tech Media" />
        <meta property="og:description" content="Explore partnership and sponsorship opportunities with I C Tech Media." />
        <link rel="canonical" href="https://ictechmedia.com/partner" />
      </Helmet>

      {/* Hero */}
      <section className="bg-deep-charcoal text-white py-12 md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-[64px] text-center">
          <span className="text-secondary text-[14px] font-semibold uppercase tracking-[0.2em] mb-4 block hero-slide-up hero-delay-1">Partner With Us</span>
          <h1 className="text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-extrabold mb-6 tracking-tight text-center hero-slide-up hero-delay-2">
            Grow Together with I C Tech Media
          </h1>
          <p className="text-white/70 text-[18px] leading-[28px] max-w-2xl mx-auto mb-10 hero-slide-up hero-delay-3">
            Join Nepal's leading tech media ecosystem. Whether you're a brand, startup, or institution, we create partnerships that drive real impact.
          </p>
          <a href="#tiers" className="inline-block bg-primary text-white px-8 py-4 rounded text-[14px] font-semibold btn-press shadow-md hero-slide-up hero-delay-4">
            View Partnership Tiers
          </a>
        </div>
      </section>

      {/* Benefits */}
      <SectionReveal>
        <section className="py-12 md:py-[80px] lg:py-[120px] bg-background">
          <div className="max-w-[1280px] mx-auto px-5 md:px-[64px]">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold text-deep-charcoal mb-4">Why Partner With Us?</h2>
              <p className="text-[18px] text-text-muted max-w-2xl mx-auto">We offer meaningful collaboration opportunities that align your brand with innovation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="reveal bg-surface rounded-xl p-6 md:p-8 border border-surface-variant card-lift group">
                  <span className="material-symbols-outlined text-[40px] text-secondary mb-4 block transition-transform duration-300 group-hover:scale-110">{benefit.icon}</span>
                  <h3 className="text-[18px] font-bold text-deep-charcoal mb-3 transition-colors duration-300 group-hover:text-primary">{benefit.title}</h3>
                  <p className="text-[15px] text-text-muted leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Tiers */}
      <SectionReveal delay={100}>
        <section id="tiers" className="py-12 md:py-[80px] lg:py-[120px] bg-surface-gray">
          <div className="max-w-[1280px] mx-auto px-5 md:px-[64px]">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold text-deep-charcoal mb-4">Partnership Tiers</h2>
              <p className="text-[18px] text-text-muted max-w-2xl mx-auto">Choose a tier that fits your goals and budget.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center overflow-hidden">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`reveal rounded-xl p-6 md:p-10 border-2 transition-all duration-300 ${
                    tier.highlighted
                      ? 'bg-primary text-white border-primary shadow-lg md:scale-105 z-10'
                      : 'bg-surface border-surface-variant card-lift'
                  }`}
                >
                  <h3 className={`text-[24px] font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-deep-charcoal'}`}>{tier.name}</h3>
                  <div className="mb-6">
                    <span className={`text-[28px] md:text-[36px] font-extrabold ${tier.highlighted ? 'text-secondary' : 'text-primary'}`}>{tier.price}</span>
                    <span className={`text-[14px] ${tier.highlighted ? 'text-white/70' : 'text-text-muted'}`}>{tier.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className={`material-symbols-outlined text-[18px] flex-shrink-0 ${tier.highlighted ? 'text-secondary' : 'text-primary'}`}>check_circle</span>
                        <span className={`text-[15px] ${tier.highlighted ? 'text-white/90' : 'text-text-muted'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center py-3 rounded text-[14px] font-semibold btn-press ${
                      tier.highlighted
                        ? 'bg-secondary text-deep-charcoal hover:bg-yellow-400'
                        : 'bg-primary text-white hover:bg-blue-800'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Contact Form */}
      <SectionReveal delay={200}>
        <section className="py-12 md:py-[80px] lg:py-[120px] bg-background">
          <div className="max-w-[1280px] mx-auto px-5 md:px-[64px]">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold text-deep-charcoal mb-4 text-center">Interested in Partnering?</h2>
              <p className="text-[18px] text-text-muted mb-12 text-center">Fill out the form below and our partnerships team will reach out.</p>

              {submitted ? (
                <div className="bg-surface rounded-xl p-8 md:p-12 border border-surface-variant text-center animate-fade-in">
                  <span className="material-symbols-outlined text-[64px] text-primary mb-4 block">check_circle</span>
                  <h3 className="text-[24px] font-bold text-deep-charcoal mb-3">Thank You!</h3>
                  <p className="text-[16px] text-text-muted mb-6">We've received your inquiry. Our partnerships team will contact you within 2 business days.</p>
                  <Link to="/" className="text-primary font-semibold hover:text-blue-800 transition-colors duration-300">
                    Return to Home
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-surface rounded-xl p-6 md:p-10 border border-surface-variant shadow-sm space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-semibold text-primary" htmlFor="partner-name">Full Name *</label>
                      <input className="bg-surface border border-gray-300 rounded-md px-4 py-3 text-[16px] text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-300" id="partner-name" name="name" required type="text" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-semibold text-primary" htmlFor="partner-org">Organization *</label>
                      <input className="bg-surface border border-gray-300 rounded-md px-4 py-3 text-[16px] text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-300" id="partner-org" name="org" required type="text" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-semibold text-primary" htmlFor="partner-email">Email *</label>
                      <input className="bg-surface border border-gray-300 rounded-md px-4 py-3 text-[16px] text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-300" id="partner-email" name="email" required type="email" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-semibold text-primary" htmlFor="partner-phone">Phone</label>
                      <input className="bg-surface border border-gray-300 rounded-md px-4 py-3 text-[16px] text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-300" id="partner-phone" name="phone" type="tel" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-semibold text-primary" htmlFor="partner-tier">Preferred Tier *</label>
                    <select className="appearance-none w-full bg-surface border border-gray-300 rounded-md px-4 py-3 pr-10 text-[16px] text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-300" id="partner-tier" name="tier" required>
                      <option disabled value="">Select a tier...</option>
                      <option value="bronze">Bronze</option>
                      <option value="silver">Silver</option>
                      <option value="gold">Gold</option>
                      <option value="custom">Custom Partnership</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-semibold text-primary" htmlFor="partner-message">Message</label>
                    <textarea className="bg-surface border border-gray-300 rounded-md px-4 py-3 text-[16px] text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-300 resize-y" id="partner-message" name="message" rows="4" />
                  </div>
                  <button type="submit" className="w-full bg-primary text-white px-8 py-4 rounded text-[14px] font-semibold btn-press">
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </SectionReveal>
    </>
  )
}

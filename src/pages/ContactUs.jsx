import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceInterest: '',
    message: '',
    consent: false,
  })
  const [showToast, setShowToast] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowToast(true)
    setIsClosing(false)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      serviceInterest: '',
      message: '',
      consent: false,
    })
    setTimeout(() => {
      setIsClosing(true)
      setTimeout(() => setShowToast(false), 300)
    }, 4500)
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - I C Tech Media Pvt. Ltd.</title>
        <meta name="description" content="Get in touch with I C Tech Media. Contact us for media solutions, technical queries, and digital services in Kathmandu, Nepal." />
        <meta property="og:title" content="Contact Us - I C Tech Media" />
        <meta property="og:description" content="Get in touch with I C Tech Media for tech solutions and digital services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ictechmedia.com/contact" />
        <meta property="og:image" content="/images/contact-map.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - I C Tech Media" />
        <meta name="twitter:description" content="Contact I C Tech Media for tech solutions and digital services." />
        <link rel="canonical" href="https://ictechmedia.com/contact" />
      </Helmet>

      {/* Toast Notification */}
      {showToast && (
        <div
          className={`fixed top-24 right-5 z-50 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 ${isClosing ? 'toast-exit' : 'toast-enter'}`}
          role="alert"
          aria-live="polite"
        >
          <span className="material-symbols-outlined text-[24px]">check_circle</span>
          <div>
            <p className="font-semibold">Thank you!</p>
            <p className="text-[14px] text-white/90">Our team will get back to you shortly.</p>
          </div>
          <button onClick={() => { setIsClosing(true); setTimeout(() => setShowToast(false), 300) }} className="ml-4 hover:text-white/80 transition-colors duration-300" aria-label="Close notification">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
      )}

      <main className="w-full max-w-[1280px] mx-auto px-5 md:px-[64px] py-[80px] md:py-[120px]">
        {/* Page Header */}
        <div className="mb-[80px] text-center max-w-3xl mx-auto">
          <h1 className="text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-extrabold text-primary mb-6 tracking-tight animate-fade-in">
            Let's start the conversation.
          </h1>
          <p className="text-[18px] leading-[28px] text-text-muted animate-fade-in" style={{ animationDelay: '0.15s' }}>
            Whether you're looking for media solutions, have a technical query, or want to explore our digital services, I C Tech Media is here to help.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Info & Map Column */}
          <div className="lg:col-span-5 flex flex-col gap-10 animate-fade-in" style={{ animationDelay: '0.25s' }}>
            {/* Office Info Card */}
            <div className="bg-surface rounded-xl p-10 relative shadow-sm border border-surface-variant card-lift">
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary transition-all duration-500 hover:w-full"></div>
              <h2 className="text-[24px] leading-[32px] font-bold text-primary mb-8">Our Main Office</h2>
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-surface-gray flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <span className="material-symbols-outlined text-primary transition-colors duration-300 group-hover:text-white">location_on</span>
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold text-primary mb-1">Visit Us</h3>
                    <a href="https://maps.google.com/?q=27.680185878643883,85.33423052999738" target="_blank" rel="noopener noreferrer" className="text-[16px] leading-[24px] text-text-muted hover:text-primary transition-colors duration-300">Kathmandu, Nepal</a>
                  </div>
                </div>
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-surface-gray flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <span className="material-symbols-outlined text-primary transition-colors duration-300 group-hover:text-white">call</span>
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold text-primary mb-1">Call Us</h3>
                    <div className="text-[16px] leading-[24px] text-text-muted">
                      <a href="tel:+9779761521785" className="block hover:text-primary transition-colors duration-300">+977 9761521785</a>
                      <a href="tel:+9779804089157" className="block hover:text-primary transition-colors duration-300">+977 9804089157</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-surface-gray flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <span className="material-symbols-outlined text-primary transition-colors duration-300 group-hover:text-white">mail</span>
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold text-primary mb-1">Email Us</h3>
                    <a href="mailto:admin@ictechmedia.com" className="text-[16px] leading-[24px] text-text-muted hover:text-primary transition-colors duration-300">admin@ictechmedia.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <a
              href="https://maps.google.com/?q=27.680185878643883,85.33423052999738"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-surface rounded-xl overflow-hidden h-[320px] relative shadow-sm border border-surface-variant group"
            >
              <iframe
                title="I C Tech Media Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=85.330%2C27.677%2C85.338%2C27.683&layer=mapnik&marker=27.680185878643883%2C85.33423052999738"
                className="w-full h-full border-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-primary text-white px-4 py-2 rounded-lg text-[12px] font-semibold flex items-center gap-2 shadow-md pointer-events-none">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                Open in Google Maps
              </div>
            </a>
          </div>

          {/* Enquiry Form Column */}
          <div className="lg:col-span-7 animate-fade-in" style={{ animationDelay: '0.35s' }}>
            <div className="bg-surface rounded-xl p-10 relative shadow-sm border border-surface-variant h-full">
              <div className="mb-10">
                <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-bold text-primary mb-3">Enquire About Our Services</h2>
                <p className="text-[16px] leading-[24px] text-text-muted">Fill out the form below and our team will get back to you shortly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-semibold text-primary" htmlFor="firstName">First Name *</label>
                    <input
                      className="bg-surface border border-gray-300 rounded-md px-4 py-3 text-[16px] leading-[24px] text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-300"
                      id="firstName"
                      name="firstName"
                      required
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      aria-required="true"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-semibold text-primary" htmlFor="lastName">Last Name *</label>
                    <input
                      className="bg-surface border border-gray-300 rounded-md px-4 py-3 text-[16px] leading-[24px] text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-300"
                      id="lastName"
                      name="lastName"
                      required
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-semibold text-primary" htmlFor="email">Email Address *</label>
                    <input
                      className="bg-surface border border-gray-300 rounded-md px-4 py-3 text-[16px] leading-[24px] text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-300"
                      id="email"
                      name="email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-required="true"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-semibold text-primary" htmlFor="phone">Phone Number</label>
                    <input
                      className="bg-surface border border-gray-300 rounded-md px-4 py-3 text-[16px] leading-[24px] text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-300"
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-semibold text-primary" htmlFor="serviceInterest">Primary Service Interest *</label>
                  <div className="relative">
                    <select
                      className="appearance-none w-full bg-surface border border-gray-300 rounded-md px-4 py-3 pr-10 text-[16px] leading-[24px] text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-300"
                      id="serviceInterest"
                      name="serviceInterest"
                      required
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      aria-required="true"
                    >
                      <option disabled value="">Select a service...</option>
                      <option value="digital_marketing">Digital Marketing</option>
                      <option value="web_development">Web Development</option>
                      <option value="it_consulting">IT Consulting</option>
                      <option value="media_production">Media Production</option>
                      <option value="other">Other</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">expand_more</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-semibold text-primary" htmlFor="message">How can we help you today?</label>
                  <textarea
                    className="bg-surface border border-gray-300 rounded-md px-4 py-3 text-[16px] leading-[24px] text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-300 resize-y"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex items-start gap-4 mt-6">
                  <input
                    className="mt-1 w-5 h-5 border-gray-300 rounded text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer transition-colors duration-300"
                    id="consent"
                    name="consent"
                    required
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleChange}
                    aria-required="true"
                  />
                  <label className="text-[13px] leading-relaxed text-text-muted cursor-pointer" htmlFor="consent">
                    I agree to the <a className="text-primary underline hover:text-blue-800 font-medium transition-colors duration-300" href="/privacy">Privacy Policy</a> and consent to I C Tech Media collecting and processing my data for this inquiry.
                  </label>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full md:w-auto text-[14px] font-semibold bg-primary text-white px-8 py-4 rounded btn-press flex items-center justify-center gap-2 group"
                  >
                    Submit Enquiry
                    <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useInView } from '../hooks/useInView'

const services = [
  {
    icon: 'event',
    title: 'Event Management',
    description: 'End-to-end management for Conferences and Workshops. We handle the logistics and technical production to ensure your message hits the mark.',
  },
  {
    icon: 'palette',
    title: 'Branding Solutions',
    description: 'Defining your Identity and Strategy. From visual design to market positioning, we build brands that resonate in a digital-first world.',
  },
  {
    icon: 'lightbulb',
    title: 'Tech Consultation',
    description: 'Guiding your Digital Transformation. Expert advice on infrastructure, software stack optimization, and emerging technology adoption.',
  },
  {
    icon: 'ads_click',
    title: 'Digital Marketing',
    description: 'Strategic campaigns that drive results. We use data-driven insights to manage your presence across social, search, and paid media channels.',
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

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services - I C Tech Media Pvt. Ltd.</title>
        <meta name="description" content="Comprehensive tech solutions including event management, branding, technology consultation, and digital marketing for businesses in Nepal." />
        <meta property="og:title" content="Services - I C Tech Media" />
        <meta property="og:description" content="Event management, branding, tech consultation, and digital marketing solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ictechmedia.com/services" />
        <meta property="og:image" content="/images/service-workspace.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services - I C Tech Media" />
        <meta name="twitter:description" content="Comprehensive tech solutions for businesses in Nepal." />
        <link rel="canonical" href="https://ictechmedia.com/services" />
      </Helmet>

      <main className="max-w-[1280px] mx-auto px-5 md:px-[64px] py-10 md:py-20">
        {/* Page Header */}
        <SectionReveal>
          <section className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h1 className="text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-extrabold text-deep-charcoal mb-6 tracking-tight">Our Tech Services</h1>
            <p className="text-[18px] leading-[28px] text-text-muted">
              Innovative, integrated, and expert technology solutions designed to scale your business. We bridge the gap between creative vision and technical execution.
            </p>
          </section>
        </SectionReveal>

        {/* Services Grid */}
        <SectionReveal delay={100}>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 max-w-5xl mx-auto stagger">
            {services.map((service) => (
              <article
                key={service.title}
                className="reveal bg-surface border border-surface-variant rounded-xl overflow-hidden flex flex-col card-lift group"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-6 text-deep-charcoal transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
                  </div>
                  <h3 className="text-[24px] leading-[32px] font-extrabold text-deep-charcoal mb-4 transition-colors duration-300 group-hover:text-primary">{service.title}</h3>
                  <p className="text-[16px] leading-[24px] text-text-muted mb-8 flex-grow">{service.description}</p>
                  <a className="inline-flex items-center gap-2 text-primary text-[14px] font-semibold transition-all duration-300 group-hover:gap-3 w-fit" href="#">
                    Learn more
                    <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                  </a>
                </div>
              </article>
            ))}
          </section>
        </SectionReveal>

        {/* Image Feature Section */}
        <SectionReveal delay={200}>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24 items-center bg-surface-gray rounded-xl overflow-hidden">
            <div className="p-8 md:p-16">
              <h2 className="text-[32px] leading-[40px] font-bold text-deep-charcoal mb-6">Empowering Your Digital Presence</h2>
              <p className="text-[16px] leading-[24px] text-text-muted mb-8">
                At I C Tech Media, we believe in a holistic approach to technology. Our services are designed not just to solve immediate problems, but to empower you to thrive in an ever-changing landscape. We work collaboratively with you to ensure your tech stack is a growth engine, not a bottleneck.
              </p>
              <div className="flex gap-4 flex-wrap">
                <span className="inline-flex items-center gap-2 bg-secondary text-deep-charcoal text-[12px] font-medium px-4 py-2 rounded-lg transition-transform duration-300 hover:scale-105">
                  <span className="material-symbols-outlined text-[18px]">verified</span> Certified Experts
                </span>
                <span className="inline-flex items-center gap-2 bg-secondary text-deep-charcoal text-[12px] font-medium px-4 py-2 rounded-lg transition-transform duration-300 hover:scale-105">
                  <span className="material-symbols-outlined text-[18px]">support_agent</span> Priority Support
                </span>
              </div>
            </div>
            <div className="h-64 lg:h-full min-h-[400px] overflow-hidden">
              <img
                className="w-full h-full object-cover img-zoom"
                alt="Modern workspace with professional collaborators focusing on digital interface"
                src="/images/service-workspace.jpg"
                loading="lazy"
              />
            </div>
          </section>
        </SectionReveal>

        {/* CTA Section */}
        <SectionReveal delay={300}>
          <section className="bg-deep-charcoal rounded-xl p-8 md:p-16 text-center shadow-sm">
            <h2 className="text-[32px] leading-[40px] font-bold text-white mb-4">Ready to Elevate Your Tech?</h2>
            <p className="text-[16px] leading-[24px] text-white/60 mb-8 max-w-2xl mx-auto">
              Book a consultation with our technology experts to explore how I C Tech Media can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-white text-[14px] font-semibold px-6 py-3 rounded-lg btn-press text-center"
              >
                Book a Consultation
              </Link>
              <Link
                to="/contact"
                className="bg-transparent text-white border-2 border-white text-[14px] font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-white hover:text-deep-charcoal text-center"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </SectionReveal>
      </main>
    </>
  )
}

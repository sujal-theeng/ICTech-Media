import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useInView } from '../hooks/useInView'

const services = [
  {
    icon: 'groups',
    title: 'Event Management',
    description: 'Seamless event planning and execution for conferences, workshops, and corporate gatherings.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
  },
  {
    icon: 'workspace_premium',
    title: 'Branding Solutions',
    description: 'Crafting memorable brand identities that resonate with your target audience.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80',
  },
  {
    icon: 'code',
    title: 'Technology Consultation',
    description: 'Expert tech guidance to help your business navigate digital transformation.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
  },
  {
    icon: 'campaign',
    title: 'Digital Marketing',
    description: 'Strategic campaigns that drive results across social, search, and paid media channels.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    icon: 'web',
    title: 'Web Development',
    description: 'Building modern, responsive websites and web applications tailored to your needs.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
  },
  {
    icon: 'videocam',
    title: 'Media Production',
    description: 'Professional video production and multimedia solutions for brands looking to tell their story.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80',
  },
]

function SectionReveal({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useInView()
  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${className}`}
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services - I C Tech Media" />
        <meta name="twitter:description" content="Comprehensive tech solutions for businesses in Nepal." />
        <link rel="canonical" href="https://ictechmedia.com/services" />
      </Helmet>

      <main className="max-w-[1280px] mx-auto px-5 md:px-[64px] py-8 md:py-12">
        {/* Page Header */}
        <SectionReveal>
          <section className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h1 className="text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-extrabold text-deep-charcoal mb-6 tracking-tight">Our Tech Services</h1>
            <p className="text-[18px] leading-[28px] text-text-muted">
              Innovative, integrated, and expert technology solutions designed to scale your business. We bridge the gap between creative vision and technical execution.
            </p>
          </section>
        </SectionReveal>

        {/* Services Grid */}
        <SectionReveal delay={100}>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 stagger">
            {services.map((service) => (
              <article
                key={service.title}
                className="bg-surface rounded-xl overflow-hidden border border-surface-variant card-lift group"
              >
                <div className="aspect-[1.4] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover img-zoom" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-surface-gray rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px] text-deep-charcoal">{service.icon}</span>
                    </div>
                    <h3 className="text-[20px] leading-[28px] font-bold text-deep-charcoal">{service.title}</h3>
                  </div>
                  <p className="text-[15px] leading-[24px] text-text-muted">{service.description}</p>
                </div>
              </article>
            ))}
          </section>
        </SectionReveal>

        {/* Feature Section */}
        <SectionReveal delay={200}>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 items-center bg-surface-gray rounded-xl overflow-hidden">
            <div className="p-8 md:p-16">
              <h2 className="text-[32px] leading-[40px] font-bold text-deep-charcoal mb-6">Empowering Your Digital Presence</h2>
              <p className="text-[16px] leading-[24px] text-text-muted mb-8">
                At I C Tech Media, we believe in a holistic approach to technology. Our services are designed not just to solve immediate problems, but to empower you to thrive in an ever-changing landscape. We work collaboratively with you to ensure your tech stack is a growth engine, not a bottleneck.
              </p>
              <div className="flex gap-4 flex-wrap">
                <span className="inline-flex items-center gap-2 bg-secondary text-deep-charcoal text-[12px] font-medium px-4 py-2 rounded-lg">
                  <span className="material-symbols-outlined text-[18px]">verified</span> Certified Experts
                </span>
                <span className="inline-flex items-center gap-2 bg-secondary text-deep-charcoal text-[12px] font-medium px-4 py-2 rounded-lg">
                  <span className="material-symbols-outlined text-[18px]">support_agent</span> Priority Support
                </span>
              </div>
            </div>
            <div className="h-64 lg:h-full min-h-[400px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Modern workspace with professional collaborators"
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
            </div>
          </section>
        </SectionReveal>

        {/* CTA Section */}
        <SectionReveal delay={300}>
          <section className="relative rounded-xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80"
              alt="Tech team collaboration"
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-deep-charcoal/80 flex flex-col items-center justify-center text-center p-8">
              <h2 className="text-[32px] leading-[40px] font-bold text-white mb-4">Ready to Elevate Your Tech?</h2>
              <p className="text-[16px] leading-[24px] text-white/70 mb-8 max-w-2xl mx-auto">
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
            </div>
          </section>
        </SectionReveal>
      </main>
    </>
  )
}

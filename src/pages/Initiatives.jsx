import { Helmet } from 'react-helmet-async'
import { useInView } from '../hooks/useInView'

const initiatives = [
  {
    icon: 'hub',
    category: 'Summit',
    title: 'Digital Nepal Summit',
    description: 'Bringing together policymakers, tech leaders, and innovators to discuss the roadmap for a digitally empowered Nepal.',
    cta: 'View Highlights',
    image: '/images/ict-award-audience.jpg',
    alt: 'Digital Nepal Summit audience',
  },
  {
    icon: 'lightbulb',
    category: 'Entrepreneurship',
    title: 'Startup & Idea Fest',
    description: 'A dynamic platform for budding entrepreneurs to pitch ideas, showcase products, and connect with potential investors.',
    cta: 'Register Now',
    image: '/images/initiative-startup.jpg',
    alt: 'Startup exhibition floor',
  },
  {
    icon: 'terminal',
    category: 'Education',
    title: 'Community Coding Bootcamps',
    description: 'Intensive, hands-on training sessions aimed at bridging the digital divide and providing modern skills to local communities.',
    cta: 'Join Next Batch',
    image: '/images/initiative-bootcamp.jpg',
    alt: 'Collaborative coding session',
  },
  {
    icon: 'military_tech',
    category: 'Recognition',
    title: 'I C Tech Awards',
    description: 'Celebrating the best in tech—from software innovations to impactful IT services that are changing the digital landscape.',
    cta: 'Nominate Now',
    image: '/images/ict-award-winners.jpg',
    alt: 'ICT Award 2024 winners',
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

export default function Initiatives() {
  return (
    <>
      <Helmet>
        <title>Initiatives - I C Tech Media Pvt. Ltd.</title>
        <meta name="description" content="Driving innovation through Digital Nepal Summit, Startup Fest, Community Coding Bootcamps, and I C Tech Awards." />
        <meta property="og:title" content="Initiatives - I C Tech Media" />
        <meta property="og:description" content="Summits, startup events, coding bootcamps, and tech awards driving Nepal's digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ictechmedia.com/initiatives" />
        <meta property="og:image" content="/images/initiative-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Initiatives - I C Tech Media" />
        <meta name="twitter:description" content="Tech events and programs driving Nepal's digital transformation." />
        <link rel="canonical" href="https://ictechmedia.com/initiatives" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Hero Background"
              className="w-full h-full object-cover object-center brightness-50 img-zoom"
              src="/images/initiative-hero.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
          </div>

          <div className="relative z-10 w-full px-5 md:px-[64px] max-w-[1280px] mx-auto text-center md:text-left">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1 bg-primary/90 text-secondary rounded-full text-[14px] font-semibold mb-6 backdrop-blur-sm border border-secondary/20 hero-slide-up hero-delay-1">
                Advancing Tech Frontiers
              </span>
              <h1 className="text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-extrabold text-white mb-6 drop-shadow-md tracking-tight hero-slide-up hero-delay-2">
                Our Initiatives
              </h1>
              <p className="text-[18px] leading-[28px] text-white/90 mb-10 max-w-xl md:mx-0 mx-auto hero-slide-up hero-delay-3">
                Driving innovation across Nepal through strategic events, capacity building, and ecosystem development. We empower the next generation of tech leaders.
              </p>
              <div className="hero-slide-up hero-delay-4">
                <a
                  href="#initiatives"
                  className="inline-flex items-center gap-2 bg-secondary text-primary px-8 py-4 rounded-lg text-[14px] font-semibold btn-press shadow-lg"
                >
                  Explore Initiatives
                  <span className="material-symbols-outlined">arrow_downward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <SectionReveal>
          <section className="w-full bg-surface-gray py-24 border-y border-surface-variant/30">
            <div className="px-5 md:px-[64px] max-w-[1280px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-surface-variant/50 stagger">
                <div className="reveal flex flex-col items-center justify-center pt-8 md:pt-0">
                  <span className="material-symbols-outlined text-primary text-5xl mb-4 transition-transform duration-300 hover:scale-110">rocket_launch</span>
                  <h3 className="text-[48px] leading-[56px] font-extrabold text-deep-charcoal mb-2">25+</h3>
                  <p className="text-[14px] font-semibold text-text-muted uppercase tracking-wider">Startup Showcases</p>
                </div>
                <div className="reveal flex flex-col items-center justify-center pt-8 md:pt-0">
                  <span className="material-symbols-outlined text-primary text-5xl mb-4 transition-transform duration-300 hover:scale-110">code</span>
                  <h3 className="text-[48px] leading-[56px] font-extrabold text-deep-charcoal mb-2">5k+</h3>
                  <p className="text-[14px] font-semibold text-text-muted uppercase tracking-wider">Developers Trained</p>
                </div>
                <div className="reveal flex flex-col items-center justify-center pt-8 md:pt-0">
                  <span className="material-symbols-outlined text-primary text-5xl mb-4 transition-transform duration-300 hover:scale-110">workspace_premium</span>
                  <h3 className="text-[48px] leading-[56px] font-extrabold text-deep-charcoal mb-2">100+</h3>
                  <p className="text-[14px] font-semibold text-text-muted uppercase tracking-wider">Awards Presented</p>
                </div>
              </div>
            </div>
          </section>
        </SectionReveal>

        {/* Featured Initiatives Grid */}
        <SectionReveal delay={100}>
          <section className="w-full py-24 bg-surface" id="initiatives">
            <div className="px-5 md:px-[64px] max-w-[1280px] mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-[32px] leading-[40px] font-bold text-deep-charcoal mb-6">Key Initiatives</h2>
                <p className="text-[18px] leading-[28px] text-text-muted">
                  We organize and support high-impact programs that drive the digital transformation of Nepal and celebrate technological excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 stagger">
                {initiatives.map((item) => (
                  <div key={item.title} className="reveal group bg-surface rounded-xl overflow-hidden border border-surface-variant card-lift flex flex-col md:flex-row relative">
                    <div className="absolute top-4 left-8 w-10 h-1 bg-secondary rounded-full z-10 transition-all duration-500 group-hover:w-16"></div>
                    <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                      <img
                        alt={item.alt}
                        className="w-full h-full object-cover img-zoom"
                        src={item.image}
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full md:w-3/5 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-primary mb-3">
                          <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
                          <span className="text-[12px] font-medium uppercase tracking-wider">{item.category}</span>
                        </div>
                        <h3 className="text-[24px] leading-[32px] font-bold text-deep-charcoal mb-3 transition-colors duration-300 group-hover:text-primary">{item.title}</h3>
                        <p className="text-[16px] leading-[24px] text-text-muted mb-6">{item.description}</p>
                      </div>
                      <a className="inline-flex items-center gap-2 text-deep-charcoal text-[14px] font-semibold transition-all duration-300 group-hover:text-primary group-hover:gap-3 w-fit" href="#">
                        {item.cta}
                        <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SectionReveal>

        {/* Call to Action */}
        <SectionReveal delay={200}>
          <section className="w-full bg-surface-gray py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="px-5 md:px-[64px] max-w-[1280px] mx-auto relative z-10 text-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-6 transition-transform duration-300 hover:scale-110">ads_click</span>
              <h2 className="text-[48px] leading-[56px] font-extrabold text-deep-charcoal mb-6 max-w-2xl mx-auto tracking-tight">Be Part of the Digital Revolution</h2>
              <p className="text-[18px] leading-[28px] text-text-muted mb-10 max-w-2xl mx-auto">
                Whether you're a student, professional, or corporate partner, there's a place for you in our tech ecosystem. Let's build a smarter future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="bg-primary text-white px-8 py-4 rounded-lg text-[14px] font-semibold btn-press shadow-lg text-center"
                >
                  Partner With Us
                </a>
                <a
                  href="#"
                  className="bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-lg text-[14px] font-semibold btn-press text-center flex items-center justify-center gap-2"
                >
                  Upcoming Events
                  <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                </a>
              </div>
            </div>
          </section>
        </SectionReveal>
      </main>
    </>
  )
}

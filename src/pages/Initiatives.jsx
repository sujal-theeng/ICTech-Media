import { Helmet } from 'react-helmet-async'
import { useInView } from '../hooks/useInView'

const initiatives = [
  {
    icon: 'newspaper',
    category: 'Media Platform',
    title: 'Living with ICT',
    description: 'Living with ICT is a leading technology magazine and digital media platform in Nepal based in Kathmandu. It operates under the slogan "Building an e-society," it covers IT trends, digital innovations, and telecommunications, and hosts the annual national ICT Awards. It focuses on Information technology, digital trends, startup profiles, and tech news in Nepal.',
    cta: 'Visit Website',
    link: 'https://livingwithict.com',
  },
  {
    icon: 'emoji_events',
    category: 'Awards',
    title: 'ICT Award',
    description: 'ICT Award is a prestigious award in Nepal, which is awarded to individuals, innovation and organizations for outstanding achievements and excellence in the field of Information and Communications Technology (ICT). It recognizes the profound impact of technology in developed and developing nations, and presents these awards annually. The ICT Award is dedicated to fostering the growth of the ICT sector by Encouraging, Recognizing, Promoting, and Acknowledging remarkable achievements.',
    cta: 'Visit Website',
    link: 'https://ictaward.org',
  },
  {
    icon: 'rocket_launch',
    category: 'Entrepreneurship',
    title: 'Startup & Idea Fest',
    description: 'Startup and Idea Fest is Nepal\'s largest startup and innovation festival, bringing together young entrepreneurs, innovators, investors, and change-makers from across all provinces.',
  },
]

const eventPortfolio = [
  {
    icon: 'trending_up',
    category: 'High-Level Economic & Policy Summit',
    title: 'Koshi Investment Summit',
    description: 'The Koshi Investment Summit stands as a landmark economic event organized to drive socio-economic transformation, mobilize domestic and Foreign Direct Investment (FDI), and promote Public-Private Partnerships (PPP) within Koshi Province. As the event management partner, I C Tech Media Pvt. Ltd. delivered an end-to-end summit experience, handling delegate management, venue setup, high-profile panel moderation and media outreach.',
  },
  {
    icon: 'groups',
    category: 'Social Impact & Capacity Building',
    title: 'Girls in ICT Workshops and Conferences',
    description: 'Aligned with the global initiative by the International Telecommunication Union (ITU) and national regulators such as the Nepal Telecommunications Authority - NTA, the Girls in ICT Workshops & Conferences aim to bridge the digital gender divide in Nepal. I C Tech Media Pvt. Ltd. executed multi-tier regional programs across provincial hubs including Kathmandu, Itahari, Surkhet, Butwal, and Dhangadhi to inspire, educate, and empower young women to pursue leadership roles in STEM and ICT.',
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Initiatives - I C Tech Media" />
        <meta name="twitter:description" content="Tech events and programs driving Nepal's digital transformation." />
        <link rel="canonical" href="https://ictechmedia.com/initiatives" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=80"
            alt="Tech conference audience"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
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
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <SectionReveal>
        <section className="w-full bg-surface-gray py-16 border-y border-surface-variant/30">
          <div className="px-5 md:px-[64px] max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-surface-variant/50">
              <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
                <span className="material-symbols-outlined text-primary text-4xl md:text-5xl mb-4">rocket_launch</span>
                <h3 className="text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-extrabold text-deep-charcoal mb-2">25+</h3>
                <p className="text-[14px] font-semibold text-text-muted uppercase tracking-wider">Startup Showcases</p>
              </div>
              <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
                <span className="material-symbols-outlined text-primary text-4xl md:text-5xl mb-4">code</span>
                <h3 className="text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-extrabold text-deep-charcoal mb-2">5k+</h3>
                <p className="text-[14px] font-semibold text-text-muted uppercase tracking-wider">Developers Trained</p>
              </div>
              <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
                <span className="material-symbols-outlined text-primary text-4xl md:text-5xl mb-4">workspace_premium</span>
                <h3 className="text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-extrabold text-deep-charcoal mb-2">100+</h3>
                <p className="text-[14px] font-semibold text-text-muted uppercase tracking-wider">Awards Presented</p>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Featured Initiatives Grid */}
      <section className="w-full py-16 bg-surface" id="initiatives">
        <div className="px-5 md:px-[64px] max-w-[1280px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-bold text-deep-charcoal mb-6" style={{ textAlign: 'center' }}>Featured Initiatives</h2>
            <p className="text-[18px] leading-[28px] text-text-muted text-center">
              We organize and support high-impact programs that drive the digital transformation of Nepal and celebrate technological excellence.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {initiatives.map((item) => (
              <div key={item.title} className="bg-surface rounded-xl border border-surface-variant p-5 md:p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-primary text-[28px] md:text-[32px] flex-shrink-0">{item.icon}</span>
                  <div>
                    <span className="text-[12px] font-semibold text-primary uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold text-deep-charcoal">{item.title}</h3>
                  </div>
                </div>
                <p className="text-[16px] leading-[28px] text-text-muted mb-4" style={{ textAlign: 'left' }}>{item.description}</p>
                {item.cta && (
                  <a className="inline-flex items-center gap-2 text-primary text-[14px] font-semibold hover:gap-3 transition-all duration-300" href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.cta}
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Management Portfolio */}
      <section className="w-full py-16 bg-surface-gray">
        <div className="px-5 md:px-[64px] max-w-[1280px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-bold text-deep-charcoal mb-6" style={{ textAlign: 'center' }}>Event Management Portfolio</h2>
            <p className="text-[18px] leading-[28px] text-text-muted text-center">
              Delivering world-class events that drive impact and inspire change across Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventPortfolio.map((item) => (
              <div key={item.title} className="bg-surface rounded-xl border border-surface-variant p-5 md:p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-primary text-[28px] md:text-[32px] flex-shrink-0">{item.icon}</span>
                  <div>
                    <span className="text-[12px] font-semibold text-primary uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold text-deep-charcoal">{item.title}</h3>
                  </div>
                </div>
                <p className="text-[16px] leading-[28px] text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <SectionReveal delay={200}>
        <section className="w-full relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
            alt="Team collaboration"
            className="w-full h-[250px] md:h-[400px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-primary/85 flex flex-col items-center justify-center text-center p-8">
            <span className="material-symbols-outlined text-secondary text-4xl md:text-5xl mb-6 transition-transform duration-300 hover:scale-110">ads_click</span>
            <h2 className="text-[28px] md:text-[36px] lg:text-[48px] leading-[36px] md:leading-[44px] lg:leading-[56px] font-extrabold text-white mb-6 max-w-2xl mx-auto tracking-tight">Be Part of the Digital Revolution</h2>
            <p className="text-[18px] leading-[28px] text-white/90 mb-10 max-w-2xl mx-auto">
              Whether you're a student, professional, or corporate partner, there's a place for you in our tech ecosystem. Let's build a smarter future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-secondary text-primary px-8 py-4 rounded-lg text-[14px] font-semibold btn-press shadow-lg text-center"
              >
                Partner With Us
              </a>
              <a
                href="#"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-[14px] font-semibold btn-press text-center flex items-center justify-center gap-2 hover:bg-white hover:text-primary"
              >
                Upcoming Events
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              </a>
            </div>
          </div>
        </section>
      </SectionReveal>
    </>
  )
}

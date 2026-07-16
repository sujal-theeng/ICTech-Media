import { Helmet } from 'react-helmet-async'
import { useInView } from '../hooks/useInView'

const teamMembers = [
  {
    name: 'Rajesh Sharma',
    role: 'Managing Director',
    bio: 'With 25 years of industry tenure, Rajesh leads the strategic vision for Nepal\'s digital media landscape.',
    image: '/images/team-1.jpg',
    alt: 'Team Lead',
  },
  {
    name: 'Anjali Gurung',
    role: 'Chief Tech Editor',
    bio: 'Leading the tech desk with a focus on emerging local startups and global hardware trends.',
    image: '/images/team-2.jpg',
    alt: 'Tech Editor',
  },
  {
    name: 'Nischal Bhatta',
    role: 'Innovation Lead',
    bio: 'Bridging the gap between traditional media and new-age tech platforms for our partners.',
    image: '/images/team-3.jpg',
    alt: 'Innovation Strategist',
  },
  {
    name: 'Priya Thapa',
    role: 'Community Lead',
    bio: 'Managing our extensive network of tech professionals and media contributors across Nepal.',
    image: '/images/team-4.jpg',
    alt: 'Community Manager',
  },
]

const achievements = [
  { icon: 'history', number: '25+', label: 'Years in Industry' },
  { icon: 'newspaper', number: '10k+', label: 'Articles Published' },
  { icon: 'hub', number: '500+', label: 'Tech Partners' },
  { icon: 'star', number: '#1', label: 'Tech Media Platform' },
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

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us - I C Tech Media Pvt. Ltd.</title>
        <meta name="description" content="Learn about I C Tech Media's 25+ years of experience in Nepal's technology and media landscape. Meet our team and discover our mission." />
        <meta property="og:title" content="About Us - I C Tech Media" />
        <meta property="og:description" content="25+ years of pioneering tech media excellence in Nepal. Meet our team and discover our mission." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ictechmedia.com/about" />
        <meta property="og:image" content="/images/about-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - I C Tech Media" />
        <meta name="twitter:description" content="25+ years of pioneering tech media excellence in Nepal." />
        <link rel="canonical" href="https://ictechmedia.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-surface-gray py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-5 md:px-[64px] grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-[14px] font-semibold text-primary uppercase tracking-[0.2em]">Our Legacy</span>
            <h1 className="text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-extrabold text-deep-charcoal tracking-tight">
              Pioneering Tech Media in Nepal.
            </h1>
            <p className="text-[18px] leading-[28px] text-text-muted max-w-lg">
              I C Tech Media brings over 25 years of specialized experience in the media and tech industry, bridging the gap between innovation and information for a digital-first Nepal.
            </p>
          </div>
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg group">
            <img
              alt="I C Tech Media Headquarters"
              className="absolute inset-0 w-full h-full object-cover img-zoom"
              src="/images/about-hero.jpg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <SectionReveal>
        <section className="py-24 md:py-32 bg-background">
          <div className="px-5 md:px-[64px] max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-[32px] leading-[40px] font-bold text-deep-charcoal mb-4">Our Foundation</h2>
                <p className="text-[18px] leading-[28px] text-text-muted">
                  Built on decades of industry leadership and a relentless pursuit of technological excellence.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 stagger">
              {/* Mission Card */}
              <div className="reveal group bg-surface rounded-xl overflow-hidden border border-surface-variant card-lift flex flex-col relative">
                <div className="p-10 flex flex-col gap-6">
                  <div className="flex items-center gap-3 text-primary mb-2">
                    <span className="material-symbols-outlined text-[28px] transition-transform duration-300 group-hover:scale-110">rocket_launch</span>
                    <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-text-muted">Mission</span>
                  </div>
                  <h3 className="text-[32px] leading-[40px] font-bold text-deep-charcoal transition-colors duration-300 group-hover:text-primary">Empowering Ecosystems</h3>
                  <div className="h-[2px] w-16 bg-secondary transition-all duration-500 group-hover:w-24"></div>
                  <p className="text-[18px] leading-[28px] text-text-muted">
                    To empower Nepal's tech ecosystem through excellence in media and innovation. We provide the tools, insights, and platforms necessary for progress.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="reveal group bg-surface rounded-xl overflow-hidden border border-surface-variant card-lift flex flex-col relative">
                <div className="p-10 flex flex-col gap-6">
                  <div className="flex items-center gap-3 text-primary mb-2">
                    <span className="material-symbols-outlined text-[28px] transition-transform duration-300 group-hover:scale-110">visibility</span>
                    <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-text-muted">Vision</span>
                  </div>
                  <h3 className="text-[32px] leading-[40px] font-bold text-deep-charcoal transition-colors duration-300 group-hover:text-primary">A Tech-First Nation</h3>
                  <div className="h-[2px] w-16 bg-secondary transition-all duration-500 group-hover:w-24"></div>
                  <p className="text-[18px] leading-[28px] text-text-muted">
                    To be the primary catalyst for Nepal's digital transformation, fostering a society where technology drives sustainable growth and social equity.
                  </p>
                </div>
              </div>

              {/* Values Card */}
              <div className="reveal group bg-surface rounded-xl overflow-hidden border border-surface-variant card-lift flex flex-col relative">
                <div className="p-10 flex flex-col gap-6">
                  <div className="flex items-center gap-3 text-primary mb-2">
                    <span className="material-symbols-outlined text-[28px] transition-transform duration-300 group-hover:scale-110">verified</span>
                    <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-text-muted">Core Values</span>
                  </div>
                  <h3 className="text-[32px] leading-[40px] font-bold text-deep-charcoal transition-colors duration-300 group-hover:text-primary">The IC Way</h3>
                  <div className="h-[2px] w-16 bg-secondary transition-all duration-500 group-hover:w-24"></div>
                  <ul className="text-[18px] leading-[28px] text-text-muted flex flex-col gap-3 list-disc list-inside">
                    <li className="transition-colors duration-300 hover:text-primary">Uncompromising Integrity</li>
                    <li className="transition-colors duration-300 hover:text-primary">Media Excellence</li>
                    <li className="transition-colors duration-300 hover:text-primary">Continuous Innovation</li>
                    <li className="transition-colors duration-300 hover:text-primary">Community Empowerment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Team Section */}
      <SectionReveal delay={100}>
        <section className="py-24 md:py-32 bg-surface-gray border-t border-surface-variant">
          <div className="max-w-[1280px] mx-auto px-5 md:px-[64px]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-[32px] leading-[40px] font-bold text-deep-charcoal mb-4">The Minds Behind IC</h2>
                <p className="text-[18px] leading-[28px] text-text-muted">
                  A multidisciplinary team of journalists, tech enthusiasts, and media strategists.
                </p>
              </div>
              <button className="text-[14px] font-semibold text-primary border-2 border-primary rounded btn-press px-6 py-3">
                Work With Us
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
              {teamMembers.map((member) => (
                <div key={member.name} className="reveal bg-surface rounded-xl overflow-hidden card-lift border border-surface-variant group">
                  <div className="w-full aspect-[0.84] relative bg-surface-container overflow-hidden">
                    <img
                      alt={member.alt}
                      className="absolute inset-0 w-full h-full object-cover img-zoom"
                      src={member.image}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[24px] leading-[32px] font-bold text-deep-charcoal mb-1 transition-colors duration-300 group-hover:text-primary">{member.name}</h3>
                    <p className="text-[14px] font-semibold text-primary mb-3">{member.role}</p>
                    <p className="text-[16px] leading-[24px] text-text-muted line-clamp-3">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Achievements Section */}
      <SectionReveal delay={200}>
        <section className="py-24 md:py-32 bg-primary text-white">
          <div className="max-w-[1280px] mx-auto px-5 md:px-[64px]">
            <div className="text-center mb-16">
              <h2 className="text-[32px] leading-[40px] font-bold text-white mb-4">Milestones &amp; Impact</h2>
              <p className="text-[18px] leading-[28px] text-white opacity-90 max-w-2xl mx-auto">
                Decades of excellence reflected in our reach and the impact we create on Nepal's tech scene.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger">
              {achievements.map((item) => (
                <div key={item.label} className="reveal flex flex-col items-center text-center p-6 bg-white/10 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <span className="material-symbols-outlined text-4xl text-secondary mb-4 transition-transform duration-300 hover:scale-110">{item.icon}</span>
                  <h4 className="text-[36px] leading-[44px] font-extrabold text-secondary mb-2">{item.number}</h4>
                  <p className="text-[16px] leading-[24px] text-white">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>
    </>
  )
}

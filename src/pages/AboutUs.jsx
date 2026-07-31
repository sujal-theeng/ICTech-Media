import { Helmet } from 'react-helmet-async'
import { useInView } from '../hooks/useInView'

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
        <meta name="description" content="Learn about I C Tech Media's 25+ years of experience in Nepal's technology and media landscape." />
        <meta property="og:title" content="About Us - I C Tech Media" />
        <meta property="og:description" content="25+ years of pioneering tech media excellence in Nepal." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ictechmedia.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - I C Tech Media" />
        <meta name="twitter:description" content="25+ years of pioneering tech media excellence in Nepal." />
        <link rel="canonical" href="https://ictechmedia.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-surface-gray py-16 md:py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-5 md:px-[64px] grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-[32px] leading-[44px] md:leading-[56px] font-extrabold text-deep-charcoal tracking-tight">
              About I C Tech Media Pvt. Ltd.
            </h1>
            <span className="text-[14px] font-semibold text-primary uppercase tracking-[0.2em]" style={{ textAlign: 'left' }}>Building an e-Society | Empowering Innovation | Driving Digital Transformation</span>
            <p className="text-[18px] leading-[28px] text-text-muted max-w-lg" style={{ textAlign: 'justify' }}>
              Established in 2069 BS, I C Tech Media Pvt. Ltd. is Nepal's premier technology media, event management, and digital consultancy hub. Driven by a passion to foster entrepreneurship and bridge the gap between technology and society, we create dynamic platforms for academicians, industry professionals, startups, and students to collaborate, share knowledge, and shape the nation's digital ecosystem.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="I C Tech Media office"
              className="w-full h-full object-cover img-zoom"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-[14px] font-medium uppercase tracking-widest block mb-1">Established</span>
              <span className="text-[36px] font-extrabold">2069 BS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <SectionReveal>
        <section className="py-16 md:py-20 bg-background">
          <div className="px-5 md:px-[64px] max-w-[1280px] mx-auto">
            {/* Our Journey */}
            <div className="mb-16">
              <span className="text-primary text-[14px] font-semibold uppercase tracking-[0.2em] mb-4 block">Our Journey & Evolution</span>
              <p className="text-[18px] leading-[28px] text-text-muted" style={{ textAlign: 'left' }}>
                What began as a grassroots initiative by dedicated technophiles has evolved into a powerhouse driving Nepal's tech revolution. In our early days, we pioneered multi-channel tech journalism through Living with ICT, spanning print (monthly magazine), radio (weekly FM program), and digital media (e-paper and web portal). Today, I C Tech Media goes beyond reporting on technology; we actively build it through strategic consultation, large-scale event management, media production, and nationwide ecosystem-building initiatives.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
              {/* Vision Card */}
              <div className="group bg-surface rounded-xl overflow-hidden border border-surface-variant card-lift flex flex-col relative">
                <div className="aspect-[1.8] overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80" alt="Vision" className="w-full h-full object-cover img-zoom" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[12px] font-semibold uppercase tracking-widest text-secondary">Vision</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="text-[28px] leading-[36px] font-bold text-deep-charcoal transition-colors duration-300 group-hover:text-primary" style={{ textAlign: 'left' }}>Building an Inclusive e-Society</h3>
                  <p className="text-[16px] leading-[24px] text-text-muted" style={{ textAlign: 'left' }}>
                    To be the primary catalyst in building an inclusive "e-Society" in Nepal by leading the digital transformation, nurturing tech innovation, and positioning Nepal's ICT sector on the global stage.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="group bg-surface rounded-xl overflow-hidden border border-surface-variant card-lift flex flex-col relative">
                <div className="aspect-[1.8] overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" alt="Mission" className="w-full h-full object-cover img-zoom" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[12px] font-semibold uppercase tracking-widest text-secondary">Mission</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="text-[28px] leading-[36px] font-bold text-deep-charcoal transition-colors duration-300 group-hover:text-primary" style={{ textAlign: 'left' }}>Empowering Through Media & Technology</h3>
                  <p className="text-[16px] leading-[24px] text-text-muted" style={{ textAlign: 'left' }}>
                    To empower individuals, startups, and organizations by providing tech media coverage, prestigious recognition platforms, impactful events, and end-to-end media and technology consultation services that foster collaboration, growth, and digital adoption across all levels of society.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Objectives */}
            <div className="mb-16">
              <span className="text-primary text-[14px] font-semibold uppercase tracking-[0.2em] mb-4 block">Core Objectives</span>
              <h2 className="text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-bold text-deep-charcoal mb-8">Our Strategic Pillars</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 group">
                  <span className="material-symbols-outlined text-primary text-[32px] transition-transform duration-300 group-hover:scale-110 flex-shrink-0 mt-1">emoji_events</span>
                  <div>
                    <h4 className="text-deep-charcoal text-[18px] md:text-[20px] font-bold mb-2 group-hover:text-primary transition-colors duration-300">Recognize & Honor Innovation</h4>
                    <p className="text-text-muted text-[16px]">Acknowledge and celebrate outstanding achievements in the tech sector through national platforms like the annual ICT Award.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <span className="material-symbols-outlined text-primary text-[32px] transition-transform duration-300 group-hover:scale-110 flex-shrink-0 mt-1">rocket_launch</span>
                  <div>
                    <h4 className="text-deep-charcoal text-[18px] md:text-[20px] font-bold mb-2 group-hover:text-primary transition-colors duration-300">Foster Entrepreneurship</h4>
                    <p className="text-text-muted text-[16px]">Drive youth innovation and regional investment by connecting startups, students, and investors through initiatives like the Startup & Idea Fest.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <span className="material-symbols-outlined text-primary text-[32px] transition-transform duration-300 group-hover:scale-110 flex-shrink-0 mt-1">school</span>
                  <div>
                    <h4 className="text-deep-charcoal text-[18px] md:text-[20px] font-bold mb-2 group-hover:text-primary transition-colors duration-300">Promote Tech Literacy & Awareness</h4>
                    <p className="text-text-muted text-[16px]">Educate and inform the public on emerging digital trends, ICT policies, and developments through multi-channel journalism under Living with ICT (Print, Digital, and Broadcast).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <span className="material-symbols-outlined text-primary text-[32px] transition-transform duration-300 group-hover:scale-110 flex-shrink-0 mt-1">diversity_3</span>
                  <div>
                    <h4 className="text-deep-charcoal text-[18px] md:text-[20px] font-bold mb-2 group-hover:text-primary transition-colors duration-300">Bridge the Digital Divide</h4>
                    <p className="text-text-muted text-[16px]">Promote digital inclusion and diversity through targeted capacity-building initiatives and provincial outreach programs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group md:col-span-2">
                  <span className="material-symbols-outlined text-primary text-[32px] transition-transform duration-300 group-hover:scale-110 flex-shrink-0 mt-1">campaign</span>
                  <div>
                    <h4 className="text-deep-charcoal text-[18px] md:text-[20px] font-bold mb-2 group-hover:text-primary transition-colors duration-300">Deliver High-Impact Media & Event Services</h4>
                    <p className="text-text-muted text-[16px]">Provide top-tier corporate event management, digital marketing, broadcasting, and tech consultation to help institutions and businesses thrive in the digital age.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-primary text-[14px] font-semibold uppercase tracking-[0.2em] mb-4 block">Our Story</span>
                <h3 className="text-[28px] leading-[36px] font-bold text-deep-charcoal mb-6">From a Vision to Nepal's Leading Tech Media Platform</h3>
                <div className="space-y-4 text-[16px] leading-[28px] text-text-muted" style={{ textAlign: 'justify' }}>
                  <p>
                    Founded in 2000, I C Tech Media started as a small team of passionate technologists and journalists with a shared dream: to put Nepal on the global tech map. What began as a modest publication has grown into Nepal's most trusted technology media house.
                  </p>
                  <p>
                    Over the past two decades, we have expanded our footprint from print media to digital platforms, event management, and technology consultation. Our journey has been defined by a commitment to truth, innovation, and the belief that technology can transform lives.
                  </p>
                  <p>
                    Today, we serve as a bridge between global tech trends and the Nepali market, helping businesses, startups, and individuals navigate the ever-evolving digital landscape with confidence.
                  </p>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="I C Tech Media team working together"
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                      <span className="text-[20px] font-extrabold text-white block">2000</span>
                      <span className="text-[10px] text-white/70 uppercase">Founded</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                      <span className="text-[20px] font-extrabold text-white block">50+</span>
                      <span className="text-[10px] text-white/70 uppercase">Team</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                      <span className="text-[20px] font-extrabold text-white block">5M+</span>
                      <span className="text-[10px] text-white/70 uppercase">Readers</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                      <span className="text-[20px] font-extrabold text-white block">30+</span>
                      <span className="text-[10px] text-white/70 uppercase">Awards</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Achievements Section */}
      <SectionReveal delay={200}>
        <section className="py-16 md:py-32 bg-primary text-white">
          <div className="max-w-[1280px] mx-auto px-5 md:px-[64px]">
            <div className="text-center mb-16">
              <h2 className="text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-bold text-white mb-4" style={{ textAlign: 'center' }}>Milestones &amp; Impact</h2>
              <p className="text-[18px] leading-[28px] text-white opacity-90 max-w-2xl mx-auto">
                Decades of excellence reflected in our reach and the impact we create on Nepal's tech scene.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center p-6 bg-white/10 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <span className="material-symbols-outlined text-4xl text-secondary mb-4 transition-transform duration-300 hover:scale-110">{item.icon}</span>
                  <h4 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] font-extrabold text-secondary mb-2">{item.number}</h4>
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

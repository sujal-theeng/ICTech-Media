import { Helmet } from 'react-helmet-async'
import { useInView } from '../hooks/useInView'

const teamMembers = [
  {
    name: 'Rajesh Sharma',
    role: 'Managing Director',
    bio: 'With 25 years of industry tenure, Rajesh leads the strategic vision for Nepal\'s digital media landscape.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Anjali Gurung',
    role: 'Chief Tech Editor',
    bio: 'Leading the tech desk with a focus on emerging local startups and global hardware trends.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'Nischal Bhatta',
    role: 'Innovation Lead',
    bio: 'Bridging the gap between traditional media and new-age tech platforms for our partners.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Priya Thapa',
    role: 'Community Lead',
    bio: 'Managing our extensive network of tech professionals and media contributors across Nepal.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
  {
    name: 'Suman Karki',
    role: 'Head of Digital Marketing',
    bio: 'Driving growth through data-driven campaigns and innovative digital strategies across platforms.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Ritu Magar',
    role: 'Event Coordinator',
    bio: 'Orchestrating large-scale tech events and ensuring seamless execution from concept to completion.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
  },
  {
    name: 'Deepak Rai',
    role: 'Lead Developer',
    bio: 'Building scalable web and mobile solutions with a passion for clean code and modern architecture.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
  },
  {
    name: 'Sita Limbu',
    role: 'Content Strategist',
    bio: 'Crafting compelling narratives and content strategies that amplify brand voices across channels.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
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
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="I C Tech Media office"
              className="w-full h-full object-cover img-zoom"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-[14px] font-medium uppercase tracking-widest block mb-1">Established</span>
              <span className="text-[36px] font-extrabold">2000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <SectionReveal>
        <section className="py-16 md:py-20 bg-background">
          <div className="px-5 md:px-[64px] max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-[32px] leading-[40px] font-bold text-deep-charcoal mb-4">Our Foundation</h2>
                <p className="text-[18px] leading-[28px] text-text-muted">
                  Built on decades of industry leadership and a relentless pursuit of technological excellence.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 stagger mb-10">
              {/* Mission Card */}
              <div className="reveal group bg-surface rounded-xl overflow-hidden border border-surface-variant card-lift flex flex-col relative">
                <div className="aspect-[1.8] overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" alt="Mission" className="w-full h-full object-cover img-zoom" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[12px] font-semibold uppercase tracking-widest text-secondary">Mission</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="text-[28px] leading-[36px] font-bold text-deep-charcoal transition-colors duration-300 group-hover:text-primary">Empowering Ecosystems</h3>
                  <p className="text-[16px] leading-[24px] text-text-muted">
                    To empower Nepal's tech ecosystem through excellence in media and innovation. We provide the tools, insights, and platforms necessary for progress.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="reveal group bg-surface rounded-xl overflow-hidden border border-surface-variant card-lift flex flex-col relative">
                <div className="aspect-[1.8] overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80" alt="Vision" className="w-full h-full object-cover img-zoom" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[12px] font-semibold uppercase tracking-widest text-secondary">Vision</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="text-[28px] leading-[36px] font-bold text-deep-charcoal transition-colors duration-300 group-hover:text-primary">A Tech-First Nation</h3>
                  <p className="text-[16px] leading-[24px] text-text-muted">
                    To be the primary catalyst for Nepal's digital transformation, fostering a society where technology drives sustainable growth and social equity.
                  </p>
                </div>
              </div>

              {/* Values Card */}
              <div className="reveal group bg-surface rounded-xl overflow-hidden border border-surface-variant card-lift flex flex-col relative">
                <div className="aspect-[1.8] overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80" alt="Core Values" className="w-full h-full object-cover img-zoom" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[12px] font-semibold uppercase tracking-widest text-secondary">Core Values</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="text-[28px] leading-[36px] font-bold text-deep-charcoal transition-colors duration-300 group-hover:text-primary">The IC Way</h3>
                  <ul className="text-[16px] leading-[24px] text-text-muted flex flex-col gap-2 list-disc list-inside">
                    <li className="transition-colors duration-300 hover:text-primary">Uncompromising Integrity</li>
                    <li className="transition-colors duration-300 hover:text-primary">Media Excellence</li>
                    <li className="transition-colors duration-300 hover:text-primary">Continuous Innovation</li>
                    <li className="transition-colors duration-300 hover:text-primary">Community Empowerment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Leadership Team */}
            <div className="mt-12">
              <div className="text-center mb-8">
                <span className="text-primary text-[14px] font-semibold uppercase tracking-[0.2em] mb-4 block">Leadership</span>
                <h3 className="text-[28px] leading-[36px] font-bold text-deep-charcoal">Meet Our Team</h3>
              </div>

              {/* Team Lead */}
              <div className="flex flex-col md:flex-row gap-8 items-center bg-surface rounded-xl p-8 border border-surface-variant mb-6">
                <div className="w-full md:w-1/3 aspect-square relative overflow-hidden rounded-xl">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" alt="Rajesh Sharma" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="bg-secondary text-deep-charcoal text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Managing Director</span>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h4 className="text-[28px] font-bold text-deep-charcoal mb-1">Rajesh Sharma</h4>
                  <p className="text-[14px] font-semibold text-primary mb-4">Managing Director</p>
                  <p className="text-[16px] leading-[28px] text-text-muted">
                    With 25 years of industry tenure, Rajesh leads the strategic vision for Nepal's digital media landscape. Under his leadership, I C Tech Media has grown from a small publication into Nepal's most trusted technology media house. He believes in the power of technology to transform lives and is committed to putting Nepal on the global tech map.
                  </p>
                </div>
              </div>

              {/* Other 3 Members */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface rounded-xl overflow-hidden border border-surface-variant group">
                  <div className="aspect-[1.2] overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" alt="Anjali Gurung" className="w-full h-full object-cover img-zoom" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="bg-secondary text-deep-charcoal text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Chief Tech Editor</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-[20px] font-bold text-deep-charcoal mb-1 group-hover:text-primary transition-colors">Anjali Gurung</h4>
                    <p className="text-[14px] text-text-muted leading-[22px]">Leading the tech desk with a focus on emerging local startups and global hardware trends.</p>
                  </div>
                </div>

                <div className="bg-surface rounded-xl overflow-hidden border border-surface-variant group">
                  <div className="aspect-[1.2] overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" alt="Nischal Bhatta" className="w-full h-full object-cover img-zoom" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="bg-secondary text-deep-charcoal text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Innovation Lead</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-[20px] font-bold text-deep-charcoal mb-1 group-hover:text-primary transition-colors">Nischal Bhatta</h4>
                    <p className="text-[14px] text-text-muted leading-[22px]">Bridging the gap between traditional media and new-age tech platforms for our partners.</p>
                  </div>
                </div>

                <div className="bg-surface rounded-xl overflow-hidden border border-surface-variant group">
                  <div className="aspect-[1.2] overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" alt="Priya Thapa" className="w-full h-full object-cover img-zoom" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="bg-secondary text-deep-charcoal text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Community Lead</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-[20px] font-bold text-deep-charcoal mb-1 group-hover:text-primary transition-colors">Priya Thapa</h4>
                    <p className="text-[14px] text-text-muted leading-[22px]">Managing our extensive network of tech professionals and media contributors across Nepal.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-primary text-[14px] font-semibold uppercase tracking-[0.2em] mb-4 block">Our Story</span>
                <h3 className="text-[28px] leading-[36px] font-bold text-deep-charcoal mb-6">From a Vision to Nepal's Leading Tech Media Platform</h3>
                <div className="space-y-4 text-[16px] leading-[28px] text-text-muted">
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
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="I C Tech Media team working together"
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-4 gap-3">
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
                  <div className="w-full aspect-[0.84] relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover img-zoom"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-[20px] leading-[26px] font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-[13px] font-semibold text-secondary">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-[14px] leading-[22px] text-text-muted line-clamp-3">{member.bio}</p>
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

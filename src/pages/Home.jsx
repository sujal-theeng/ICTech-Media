import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useInView } from '../hooks/useInView'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80',
    label: 'Leading Tech Innovation in Nepal',
    title: 'Innovating the Future of Tech in Nepal',
    description: 'I C Tech Pvt. Ltd. is a prominent tech media organization and digital initiative in Nepal. Living with ICT and its flagship event ICT Award contributes significantly to the growth and recognition of Nepal\'s ICT sector, fostering a culture of innovation and excellence in technology-driven initiatives. It works on various aspects and domains of digital transformation.',
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

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 1000)
  }, [currentSlide, isTransitioning])

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length)
  }, [currentSlide, goToSlide])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <>
      <Helmet>
        <title>I C Tech Media Pvt. Ltd. - Leading Tech Innovation in Nepal</title>
        <meta name="description" content="I C Tech Media is at the forefront of Nepal's tech scene, driving innovation through events, media, and cutting-edge digital solutions." />
        <meta name="keywords" content="tech Nepal, technology media, digital innovation, event management, branding, tech consultation" />
        <meta name="author" content="I C Tech Media Pvt. Ltd." />
        <meta property="og:title" content="I C Tech Media Pvt. Ltd. - Leading Tech Innovation in Nepal" />
        <meta property="og:description" content="Driving innovation through events, media, and cutting-edge digital solutions in Nepal." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ictechmedia.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="I C Tech Media Pvt. Ltd." />
        <meta name="twitter:description" content="Driving innovation through events, media, and cutting-edge digital solutions in Nepal." />
        <link rel="canonical" href="https://ictechmedia.com" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[1200ms] ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] ease-out"
              style={{ transform: index === currentSlide ? 'scale(1)' : 'scale(1.08)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

            <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-[64px] h-full flex flex-col justify-center">
              {index === currentSlide && (
                <>
                  <span className="text-secondary text-[14px] font-semibold uppercase tracking-[0.2em] mb-5 block hero-slide-up hero-delay-1">
                    {slide.label}
                  </span>
                  <h1 className="text-white text-[32px] md:text-[44px] leading-[40px] md:leading-[52px] font-extrabold tracking-tight max-w-3xl mb-5 hero-slide-up hero-delay-2" style={{ textAlign: 'left' }}>
                    {slide.title}
                  </h1>
                  <p className="text-white/80 text-[16px] md:text-[18px] leading-[28px] max-w-2xl mb-10 hero-slide-up hero-delay-3">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4 hero-slide-up hero-delay-4">
                    <Link
                      to="/services"
                      className="group bg-primary text-white px-8 py-3.5 rounded text-[14px] font-semibold btn-press shadow-md"
                    >
                      <span className="inline-flex items-center gap-2">
                        Explore our Services
                        <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                      </span>
                    </Link>
                    <Link
                      to="/initiatives"
                      className="group bg-transparent border-2 border-secondary text-secondary px-8 py-3.5 rounded text-[14px] font-semibold btn-press shadow-sm hover:bg-secondary hover:text-deep-charcoal"
                    >
                      <span className="inline-flex items-center gap-2">
                        View our Work
                        <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                      </span>
                    </Link>

                  </div>
                </>
              )}
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20" role="tablist" aria-label="Slide navigation">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              role="tab"
              aria-selected={index === currentSlide}
              aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? 'w-8 h-3 bg-secondary pulse-dot-active'
                  : 'w-3 h-3 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <SectionReveal>
        <section className="py-12 md:py-[80px] lg:py-[120px] bg-background">
          <div className="max-w-[1280px] mx-auto px-5 md:px-[64px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[64px] items-center">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="I C Tech Media team collaborating"
                  className="w-full max-w-[480px] mx-auto rounded-xl shadow-xl h-[400px] md:h-[500px] object-cover img-zoom"
                  loading="lazy"
                />
                <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-xl shadow-xl hidden md:block card-lift border-b-4 border-secondary">
                  <span className="text-[48px] leading-[56px] font-extrabold block mb-1">15+</span>
                  <span className="text-[14px] font-semibold uppercase tracking-wider text-secondary">Years Excellence</span>
                </div>
              </div>

              <div>
                <span className="text-primary text-[14px] font-semibold uppercase tracking-[0.2em] mb-4 block">Our Core Values</span>
                <h2 className="text-deep-charcoal text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-bold mb-6">Combining Innovation, Sustainability &amp; Efficiency</h2>
                <p className="text-text-muted text-[18px] leading-[28px] mb-8">
                  We believe in combining innovation, sustainability, and efficiency to create lasting impact in Nepal's technology landscape.
                </p>
                <div className="space-y-8 mb-10">
                  <div className="flex items-center gap-4 group">
                    <span className="material-symbols-outlined text-primary text-[32px] transition-transform duration-300 group-hover:scale-110 flex-shrink-0">lightbulb</span>
                    <div>
                      <h4 className="text-deep-charcoal text-[20px] font-bold mb-2 group-hover:text-primary transition-colors duration-300">Innovation First</h4>
                      <p className="text-text-muted text-[16px]">Supporting enterprises in their transition to sustainable digital practices through modern tech stacks.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <span className="material-symbols-outlined text-primary text-[32px] transition-transform duration-300 group-hover:scale-110 flex-shrink-0">handshake</span>
                    <div>
                      <h4 className="text-deep-charcoal text-[20px] font-bold mb-2 group-hover:text-primary transition-colors duration-300">Collaborative Spirit</h4>
                      <p className="text-text-muted text-[16px]">Enhancing innovation through strategic partnerships and community-driven projects.</p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-secondary pl-6 py-2 bg-secondary-container rounded-r-lg p-4">
                  <p className="text-deep-charcoal italic text-[16px]">
                    I C Tech Media serves as a catalyst for digital transformation in Nepal's business landscape. We provide comprehensive solutions that bridge the gap between traditional practices and modern technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Services Grid Section */}
      <SectionReveal delay={100}>
        <section className="py-12 md:py-[80px] lg:py-[120px] bg-surface-gray">
          <div className="max-w-[1280px] mx-auto px-5 md:px-[64px]">
            <div className="text-center max-w-3xl mx-auto mb-[80px]">
              <span className="text-primary text-[14px] font-semibold uppercase tracking-[0.2em] mb-4 block">Our Services</span>
              <h2 className="text-deep-charcoal text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-bold mb-6 text-center">Comprehensive Tech Solutions</h2>
              <p className="text-text-muted text-[18px] leading-[28px]">
                We offer a wide range of services designed to support growth, digital presence, and strategic technology adoption in Nepal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
              {[
                { icon: 'event', title: 'Event Management', desc: 'Organizing world-class tech summits and conferences that bring together innovators and industry leaders.', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80' },
                { icon: 'palette', title: 'Branding Solutions', desc: 'Crafting unique brand identities and digital marketing strategies that resonate with your target audience.', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80' },
                { icon: 'insights', title: 'Technology Consultation', desc: 'Providing expert advice on digital infrastructure and emerging technologies to optimize your business operations.', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80' },
                { icon: 'campaign', title: 'Digital Marketing & Media', desc: 'Engaging digital strategies that drive growth and enhance online presence.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
                { icon: 'web', title: 'Marketing & Advertising', desc: 'Innovative campaigns designed for maximum impact and audience engagement.', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80' },
                { icon: 'videocam', title: 'Broadcasting & Production', desc: 'High-quality video production and broadcasting services for all your content needs.', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80' },
              ].map((service) => (
                <div key={service.title} className="bg-surface rounded-xl overflow-hidden border border-surface-container card-lift group flex flex-col h-full">
                  <div className="aspect-[1.6] overflow-hidden relative">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover img-zoom" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                      <span className="material-symbols-outlined text-[24px] text-deep-charcoal transition-colors duration-300 group-hover:text-secondary">{service.icon}</span>
                    </div>
                  </div>
                  <div className="p-5 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-deep-charcoal text-[20px] md:text-[22px] font-bold mb-4 transition-colors duration-300 group-hover:text-primary">{service.title}</h3>
                    <p className="text-text-muted text-[16px] leading-[24px] mb-8 flex-grow">{service.desc}</p>
                    <Link to="/services" className="text-primary text-[14px] font-semibold flex items-center gap-2 transition-all duration-300 group-hover:gap-3 mt-auto">
                      Read More <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link
                to="/services"
                className="inline-block bg-transparent border-2 border-primary text-primary px-8 py-3.5 rounded text-[14px] font-semibold btn-press shadow-sm"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* News Section */}
      <SectionReveal delay={200}>
        <section className="py-12 md:py-[80px] lg:py-[120px] bg-background">
          <div className="max-w-[1280px] mx-auto px-5 md:px-[64px]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-[80px] gap-6">
              <div className="max-w-2xl">
                <span className="text-primary text-[14px] font-semibold uppercase tracking-[0.2em] mb-4 block">News &amp; Insights</span>
                <h2 className="text-deep-charcoal text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-bold">Latest Updates from I C Tech</h2>
              </div>
              <button className="bg-deep-charcoal text-secondary px-8 py-3.5 rounded text-[14px] font-semibold btn-press whitespace-nowrap shadow-sm">
                More Articles
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger">
              {[
                {
                  image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80',
                  date: '15 Feb 2025',
                  category: 'Events',
                  title: 'Digital Nepal Summit 2025: Key Takeaways',
                },
                {
                  image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
                  date: '02 Feb 2025',
                  category: 'Community',
                  title: "Community Coding Bootcamps: Empowering Nepal's Youth",
                },
                {
                  image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
                  date: '28 Jan 2025',
                  category: 'Consultation',
                  title: "The Future of AI in Nepal's Emerging Tech Economy",
                },
              ].map((article) => (
                <article key={article.title} className="bg-surface rounded-xl overflow-hidden card-lift border border-surface-container group">
                  <div className="aspect-[1.33] relative overflow-hidden border-b-4 border-secondary">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover img-zoom" loading="lazy" />
                  </div>
                   <div className="p-5 md:p-8">
                    <div className="flex items-center gap-4 md:gap-6 text-text-muted text-[12px] font-medium mb-4 uppercase tracking-wider flex-wrap">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px] text-primary">calendar_today</span> {article.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px] text-primary">folder</span> {article.category}
                      </span>
                    </div>
                    <h3 className="text-deep-charcoal text-[22px] font-bold leading-snug mb-4 line-clamp-2 transition-colors duration-300 group-hover:text-primary cursor-pointer">{article.title}</h3>
                    <a className="text-primary text-[14px] font-semibold flex items-center gap-2 mt-6 transition-all duration-300 group-hover:gap-3" href="#">
                      Read Article <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>
    </>
  )
}

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'Acceptance of Terms',
    content: 'By accessing or using the I C Tech Media website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.',
  },
  {
    title: 'Services',
    content: 'I C Tech Media provides technology consulting, event management, media production, digital marketing, and related services. Service details, scope, and pricing are defined in individual agreements or proposals.',
  },
  {
    title: 'Intellectual Property',
    content: 'All content on this website—including text, graphics, logos, images, and software—is the property of I C Tech Media Pvt. Ltd. and is protected by intellectual property laws. You may not reproduce or distribute content without written permission.',
  },
  {
    title: 'User Responsibilities',
    content: 'You are responsible for ensuring that any information you provide is accurate and that your use of our services complies with applicable laws and regulations.',
  },
  {
    title: 'Limitation of Liability',
    content: 'I C Tech Media shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our liability is limited to the amount paid for the specific service in question.',
  },
  {
    title: 'Third-Party Links',
    content: 'Our website may contain links to third-party sites. We are not responsible for the content, privacy practices, or accuracy of external sites.',
  },
  {
    title: 'Termination',
    content: 'We reserve the right to suspend or terminate access to our services at our discretion, without notice, for conduct that we believe violates these terms or is harmful to others.',
  },
  {
    title: 'Governing Law',
    content: 'These Terms are governed by the laws of Nepal. Any disputes shall be resolved in the courts of Kathmandu, Nepal.',
  },
]

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - I C Tech Media Pvt. Ltd.</title>
        <meta name="description" content="Terms of Service for I C Tech Media. Read the terms governing the use of our website and services." />
        <meta property="og:title" content="Terms of Service - I C Tech Media" />
        <meta property="og:description" content="Terms and conditions for using I C Tech Media services and website." />
        <link rel="canonical" href="https://ictechmedia.com/terms" />
      </Helmet>

      <main className="w-full max-w-[1280px] mx-auto px-5 md:px-[64px] py-[80px] md:py-[120px]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-extrabold text-primary mb-6 tracking-tight animate-fade-in">
            Terms of Service
          </h1>
          <p className="text-[14px] text-text-muted mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>Last updated: July 2026</p>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <section key={section.title} className="animate-fade-in" style={{ animationDelay: `${(i + 2) * 0.08}s` }}>
                <h2 className="text-[20px] font-bold text-deep-charcoal mb-3">{section.title}</h2>
                <p className="text-[16px] leading-[28px] text-text-muted">{section.content}</p>
              </section>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-surface-variant animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-[16px] text-text-muted">
              For questions about these Terms, please{' '}
              <Link to="/contact" className="text-primary font-semibold hover:text-blue-800 transition-colors duration-300">
                contact us
              </Link>.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

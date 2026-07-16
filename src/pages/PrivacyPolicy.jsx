import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'Information We Collect',
    content: 'We collect information you provide directly, such as when you fill out a contact form, subscribe to our newsletter, or request a service. This may include your name, email address, phone number, and any other details you share with us.',
  },
  {
    title: 'How We Use Your Information',
    content: 'We use the information to respond to your inquiries, provide requested services, improve our website and offerings, send occasional updates (with your consent), and ensure the security of our platform.',
  },
  {
    title: 'Information Sharing',
    content: 'We do not sell or rent your personal information to third parties. We may share data with trusted service providers who assist in operating our website and conducting our business, subject to confidentiality agreements.',
  },
  {
    title: 'Cookies & Tracking',
    content: 'Our website may use cookies and similar technologies to enhance your experience, analyze traffic, and understand usage patterns. You can control cookie preferences through your browser settings.',
  },
  {
    title: 'Data Security',
    content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
  },
  {
    title: 'Your Rights',
    content: 'You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at admin@ictechmedia.com.',
  },
  {
    title: 'Changes to This Policy',
    content: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.',
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - I C Tech Media Pvt. Ltd.</title>
        <meta name="description" content="Privacy Policy for I C Tech Media. Learn how we collect, use, and protect your personal information." />
        <meta property="og:title" content="Privacy Policy - I C Tech Media" />
        <meta property="og:description" content="Learn how I C Tech Media handles your personal data and privacy." />
        <link rel="canonical" href="https://ictechmedia.com/privacy" />
      </Helmet>

      <main className="w-full max-w-[1280px] mx-auto px-5 md:px-[64px] py-[80px] md:py-[120px]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-extrabold text-primary mb-6 tracking-tight animate-fade-in">
            Privacy Policy
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
              If you have questions about this Privacy Policy, please{' '}
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

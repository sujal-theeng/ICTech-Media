import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | I C Tech Media</title>
        <meta name="description" content="The page you are looking for does not exist or has been moved." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-[60vh] flex items-center justify-center px-5">
        <div className="text-center max-w-lg">
          <span className="text-[80px] md:text-[120px] lg:text-[160px] font-extrabold text-primary/20 leading-none block hero-slide-up hero-delay-1">404</span>
          <h1 className="text-[32px] md:text-[40px] font-bold text-deep-charcoal -mt-8 mb-4 hero-slide-up hero-delay-2">Page Not Found</h1>
          <p className="text-[18px] text-text-muted mb-10 leading-relaxed hero-slide-up hero-delay-3">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center hero-slide-up hero-delay-4">
            <Link
              to="/"
              className="bg-primary text-white px-8 py-3.5 rounded text-[14px] font-semibold btn-press shadow-sm"
            >
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-primary text-primary px-8 py-3.5 rounded text-[14px] font-semibold btn-press"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

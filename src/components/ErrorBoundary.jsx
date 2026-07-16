import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center px-5">
          <div className="text-center max-w-lg animate-fade-in">
            <span className="material-symbols-outlined text-[64px] text-primary/40 block mb-4 hero-slide-up hero-delay-1">error</span>
            <h2 className="text-[28px] font-bold text-deep-charcoal mb-3 hero-slide-up hero-delay-2">Something went wrong</h2>
            <p className="text-[16px] text-text-muted mb-8 leading-relaxed hero-slide-up hero-delay-3">
              An unexpected error occurred. Please try refreshing the page or contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center hero-slide-up hero-delay-4">
              <button
                onClick={() => window.location.reload()}
                className="bg-primary text-white px-8 py-3.5 rounded text-[14px] font-semibold btn-press"
              >
                Refresh Page
              </button>
              <Link
                to="/"
                className="bg-transparent border-2 border-primary text-primary px-8 py-3.5 rounded text-[14px] font-semibold btn-press"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

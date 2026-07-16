import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID || ''

function GoogleAnalytics() {
  useEffect(() => {
    if (!GA4_MEASUREMENT_ID || GA4_MEASUREMENT_ID === 'G-XXXXXXXXXX') return

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag() { window.dataLayer.push(arguments) }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', GA4_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    })

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}

function AnalyticsTracker() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (!GA4_MEASUREMENT_ID || GA4_MEASUREMENT_ID === 'G-XXXXXXXXXX') return
    if (window.gtag) {
      window.gtag('config', GA4_MEASUREMENT_ID, {
        page_path: pathname,
        page_title: document.title,
      })
    }
  }, [pathname])

  return null
}

export { GoogleAnalytics, AnalyticsTracker }

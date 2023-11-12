'use client'

import { useEffect, useRef } from 'react'

export default function GoogleAnalytics() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const script = document.createElement('script')
      script.setAttribute('async', 'true')
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-JTFMB9XGTC'

      const script2 = document.createElement('script')
      script2.innerText = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-JTFMB9XGTC');`
      ref.current.replaceChildren(script, script2)
    }
  }, [ref])

  return <div ref={ref} />
}

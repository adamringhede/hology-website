'use client'
import React, { useEffect, useRef } from 'react'

export default function ConvertKitForm() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const script = document.createElement('script')
      script.setAttribute('data-uid', 'fe9234a2d1')
      script.src = 'https://deft-leader-3224.ck.page/fe9234a2d1/index.js'
      ref.current.replaceChildren(script)
    }
  }, [ref])

  return <div ref={ref} />
}

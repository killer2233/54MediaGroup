'use client'

import { Suspense } from 'react'
import QuotePageInner from './QuotePageInner'

export default function QuotePage() {
  return (
    <Suspense fallback={<div>Loading quote form…</div>}>
      <QuotePageInner />
    </Suspense>
  )
}

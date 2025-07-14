'use client'

import { useSearchParams } from 'next/navigation'
import QuoteSection from '../component/QuoteSection/QuoteSection'


export default function QuotePage() {
  const params = useSearchParams()
  const initialService = params.get('service') ?? undefined

  return <QuoteSection initialService={initialService} />
}

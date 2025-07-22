'use client'

import { useSearchParams } from 'next/navigation'
import QuoteFormSection from '../component/QuoteSection/QuoteSection'


export default function QuotePageInner() {
  const params = useSearchParams()
  const initialService = params.get('service') ?? undefined

  return <QuoteFormSection initialService={initialService} />
}

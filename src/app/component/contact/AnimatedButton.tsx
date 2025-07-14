// components/AnimatedButton.tsx
'use client'

import { animated, useSpring } from '@react-spring/web'
import React from 'react'

export function AnimatedButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const [style, api] = useSpring(() => ({ scale: 1 }))

  return (
    <animated.button
      {...props}
      style={style}
      onMouseEnter={() => api.start({ scale: 1.05 })}
      onMouseLeave={() => api.start({ scale: 1 })}
    />
  )
}

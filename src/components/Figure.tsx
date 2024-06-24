'use client'

import Image, { ImageProps } from 'next/image'
import { useEffect, useState } from 'react'

type FigureProps = {
  caption?: string
  darkSrc?: string
} & ImageProps

export function Figure({ src, darkSrc, ...props }: FigureProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const matchDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(matchDarkMode.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches)
    }

    matchDarkMode.addEventListener('change', handleChange)

    return () => {
      matchDarkMode.removeEventListener('change', handleChange)
    }
  }, [])

  const imageSrc = darkSrc && isDarkMode ? darkSrc : src

  return (
    <figure className="relative">
      <Image
        src={imageSrc}
        sizes="100vw"
        className="h-full w-full rounded-sm"
        placeholder="blur"
        {...props}
        alt={props.alt || ''}
      />
      {props.caption && (
        <figcaption className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {props.caption}
        </figcaption>
      )}
    </figure>
  )
}

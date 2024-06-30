'use client'

import '@/styles/react-medium-image-zoom.css'
import Image, { ImageProps } from 'next/image'
import { useEffect, useState } from 'react'
import Zoom from 'react-medium-image-zoom'
import { CloseIcon } from './icons/CloseIcon'
import { SizeIcon } from './icons/SizeIcon'
import { TreePineIcon } from './icons/TreePineIcon'

type FigureProps = {
  caption?: string
  srcDark?: string
} & ImageProps

function UnZoomButton() {
  return <CloseIcon className="size-6 text-brand-900 hover:text-brand-500" />
}

function ZoomButton() {
  return <SizeIcon className="size-6 text-brand-900 hover:text-brand-500" />
}

export function Figure({ src, srcDark, ...props }: FigureProps) {
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

  const imageSrc = srcDark && isDarkMode ? srcDark : src

  return (
    <figure className="relative">
      <Zoom IconUnzoom={UnZoomButton} IconZoom={ZoomButton}>
        <Image
          src={imageSrc}
          sizes="100vw"
          className="h-full w-full rounded-sm"
          placeholder="blur"
          {...props}
          alt={props.alt || ''}
        />
      </Zoom>
      {props.caption && (
        <div className="my-2 flex gap-4">
          <TreePineIcon className="size-5 stroke-[1px] align-baseline text-zinc-600 dark:text-zinc-400" />
          <figcaption className="!m-0 h-6 !p-0 text-sm text-zinc-600 dark:text-zinc-400">
            {props.caption}
          </figcaption>
        </div>
      )}
    </figure>
  )
}

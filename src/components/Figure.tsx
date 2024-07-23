'use client'

import '@/styles/react-medium-image-zoom.css'
import Image from 'next-export-optimize-images/image'
import { type ImageProps } from 'next/image'
import Zoom from 'react-medium-image-zoom'
import { CloseIcon } from './icons/CloseIcon'
import { SizeIcon } from './icons/SizeIcon'
import { TreePineIcon } from './icons/TreePineIcon'

type FigureProps = {
  caption?: string
  srcDark?: string
  zoom?: boolean
} & ImageProps

function UnZoomButton() {
  return <CloseIcon className="size-6 text-brand-900 hover:text-brand-500" />
}

function ZoomButton() {
  return <SizeIcon className="size-6 text-brand-900 hover:text-brand-500" />
}

export function Figure({ src, srcDark, zoom = true, ...props }: FigureProps) {
  return (
    <figure className="relative">
      {zoom ? (
        <Zoom IconUnzoom={UnZoomButton} IconZoom={ZoomButton}>
          <>
            <div data-hide-on-theme="dark" className="dark:hidden">
              <Image
                src={src}
                sizes="100vw"
                className="h-full w-full rounded-sm"
                placeholder="blur"
                {...props}
                alt={props.alt || ''}
              />
            </div>
            <div data-hide-on-theme="light" className="hidden dark:block">
              <Image
                src={srcDark ?? src}
                sizes="100vw"
                className="h-full w-full rounded-sm"
                placeholder="blur"
                {...props}
                alt={props.alt || ''}
              />
            </div>
          </>
        </Zoom>
      ) : (
        <>
          <div data-hide-on-theme="dark" className="dark:hidden">
            <Image
              src={src}
              sizes="100vw"
              className="h-full w-full rounded-sm"
              placeholder="blur"
              {...props}
              alt={props.alt || ''}
            />
          </div>
          <div data-hide-on-theme="light" className="hidden dark:block">
            <Image
              src={srcDark ?? src}
              sizes="100vw"
              className="h-full w-full rounded-sm"
              placeholder="blur"
              {...props}
              alt={props.alt || ''}
            />
          </div>
        </>
      )}
      {props.caption && (
        <>
          <TreePineIcon className="mt-2 size-5 stroke-[1px] align-baseline text-zinc-600 dark:text-zinc-400" />
          <div className="my-2">
            <figcaption className="!m-0 h-6 !p-0 text-sm text-zinc-600 dark:text-zinc-400">
              {props.caption}
            </figcaption>
          </div>
        </>
      )}
    </figure>
  )
}

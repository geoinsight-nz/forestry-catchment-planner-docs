import Image, { ImageProps } from 'next/image'

type FigureProps = {
  caption?: string
} & ImageProps

export function Figure(props: FigureProps) {
  return (
    <figure className="relative">
      <Image
        sizes="100vw"
        className="h-auto w-full max-w-[28rem]"
        width={props.src.width}
        height={props.src.height}
        placeholder="blur"
        blurDataURL={props.src.blurDataURL}
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

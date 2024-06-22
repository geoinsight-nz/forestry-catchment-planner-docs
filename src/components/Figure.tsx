import Image, { ImageProps } from 'next/image'

export function Figure(props: ImageProps, caption?: string) {
  return (
    <figure className="relative">
      <Image
        sizes="100vw"
        className="h-auto w-full"
        width={600}
        height={400}
        {...props}
        alt={props.alt || ''}
      />
      {caption && (
        <figcaption className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

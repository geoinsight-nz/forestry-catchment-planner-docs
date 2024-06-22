import Image, { ImageProps } from 'next/image'

type GalleryImage = {
  caption?: string
} & ImageProps

type GalleryProps = {
  images: GalleryImage[]
}

export function Gallery({ images }: GalleryProps) {
  return (
    <div className="flex flex-wrap gap-x-4">
      {images.map((image, index) => (
        <figure key={index} className="relative flex flex-col items-start max-w-60">
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={400}
            placeholder="blur"
            className="rounded-lg"
          />
          {image.caption && (
            <figcaption className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}

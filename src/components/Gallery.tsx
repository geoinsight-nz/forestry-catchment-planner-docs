import Image from 'next/image'

type GalleryProps = {
  images: {
    src: string
    alt: string
    caption: string
  }[]
}

export function Gallery({ images }: GalleryProps) {
  return (
    <div className="flex flex-wrap gap-x-4">
      {images.map((image, index) => (
        <figure
          key={index}
          className="relative flex flex-col items-start"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={240}
            height={240}
            className="rounded-lg"
          />
          <figcaption className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {image.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

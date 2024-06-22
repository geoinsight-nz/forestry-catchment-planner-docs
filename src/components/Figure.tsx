import Image, { ImageProps } from 'next/image'

export function Figure(props: ImageProps) {
  return (
    <figure className="relative">
      <Image
        sizes="100vw"
        className="h-auto w-full max-w-[28rem]"
        width={600}
        height={400}
        placeholder="blur"
        {...props}
        alt={props.alt || ''}
      />
    </figure>
  )
}

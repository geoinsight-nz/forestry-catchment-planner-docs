import Image, { ImageProps } from 'next/image'

export function Figure(props: ImageProps) {
  return (
    <Image
      sizes="100vw"
      className="h-auto w-full"
      width={600}
      height={400}
      {...props}
      alt={props.alt || ''}
    />
  )
}

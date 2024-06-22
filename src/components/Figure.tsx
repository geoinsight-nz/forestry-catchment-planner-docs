import Image, { ImageProps } from 'next/image'

export default function Figure(props: ImageProps) {
  return (
    <Image
      sizes="100vw"
      className="h-auto w-full"
      {...props}
      alt={props.alt || ''}
    />
  )
}

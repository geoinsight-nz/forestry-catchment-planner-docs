import Video from 'next-video'

export default function VideoPlayer({ src }: { src: string }) {
  return <Video src={src} />
}

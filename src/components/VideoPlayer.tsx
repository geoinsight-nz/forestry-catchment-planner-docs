import Video from 'next-video';
import awesomeVideo from '/videos/get-started.mp4'

export default function VideoPlayer() {
  return <Video src={awesomeVideo} />;
}

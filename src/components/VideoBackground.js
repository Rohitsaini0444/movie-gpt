import { useSelector } from 'react-redux'
import useTrailerVideos from '../hooks/useMovieTrailer'

const VideoBackground = ({ movieId }) => {
  useTrailerVideos(movieId)
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo)

  return (
    <div className=' bg-cyan-300  '>
      {/* <div  className='h-60'>
        hi
      </div>
      <div  className='h-60'>
        hi
      </div>
      <div className='h-60'>
        hi
      </div> */}
      <iframe
        className='w-screen aspect-video scale-y-125 '
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default VideoBackground
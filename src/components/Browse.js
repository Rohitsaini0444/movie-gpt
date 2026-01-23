import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'

function Browse() {
 useNowPlayingMovies();
  return (
    <div>
      <Header />
      <div>Browse</div>
    </div>
  )
}

export default Browse
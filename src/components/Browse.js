import usePopularMovies from '../hooks/usePopularMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Header from './Header'
import { MainContainer } from './MainContainer';
import SecondryContainer from './SecondryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

function Browse() {
  const gptSearchEnabled = useSelector((store) => store?.gptSearch?.gptSearchEnabled)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {gptSearchEnabled ? <GptSearch /> :
        <>
          <MainContainer />
          <SecondryContainer />
        </>
      }
    </div>
  )
}

export default Browse
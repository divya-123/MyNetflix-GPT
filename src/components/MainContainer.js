import React from 'react';
import {useSelector} from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    //const trailer = useSelector(store => store.movies?.trailer);
    if (!movies) return; //Earlyreturn
    const mainMovie = movies[0];
    //const trailerId = trailer.key;
    const {original_title, overview, id} = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
      
    </div>
  )
}

export default MainContainer

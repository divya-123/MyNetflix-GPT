import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';


const Browse = () => {

useNowPlayingMovies();
usePopularMovies();

{/*
  2 sections - 
1. MainContainer - Video
    - VideoBackground
    - VideoTitle
2. SecondaryContainer - Movie recommendations
    - MovieList X n
      - Card X n
*/}

  return (    
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse

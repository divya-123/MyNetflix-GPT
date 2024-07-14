import React from 'react'
import MovieList from './MovieList';
import {useSelector} from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies);
  console.log("Movies", movies);
  //MovieList * N
  //  -MovieCard * N
  return (
    <div className='bg-black'>
      <div className='pl-12 -mt-60 relative z-20 text-white'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>      
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer

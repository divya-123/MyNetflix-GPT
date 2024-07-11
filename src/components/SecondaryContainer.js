import React from 'react'
import MovieList from './MovieList';
import {useSelector} from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies);
  console.log("Movies", movies);
  //MovieList * N
  //  -MovieCard * N
  return (
    <div className='bg-black text-white'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryContainer

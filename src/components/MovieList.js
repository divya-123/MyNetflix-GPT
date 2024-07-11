import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    console.log("Inside Movie List", movies);
  return (
    <div className='p-4'>
        <h1 className='text-3xl py-6'>{title}</h1>
        <div className='flex overflow-x-scroll'>            
            <div className='flex'>
                {movies?.map(movie=><MovieCard key={movie.id} movie={movie} />)}  
            </div>
        </div>      
    </div>
  )
}

export default MovieList

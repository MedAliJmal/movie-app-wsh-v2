import React from 'react'
import MovieCard from '../movieCard/MovieCard'

const MovieList = ({movies, handleDelete}) => {
    return (
        <div className='movielist'>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} handleDelete={handleDelete}/>)}
        </div>
    )
}

export default MovieList

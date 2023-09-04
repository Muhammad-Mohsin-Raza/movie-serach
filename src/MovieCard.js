import React from 'react'

function MovieCard({movie}) {
    console.log("hell")
    console.log(movie)
  return (
    <div className='movie'>
        <div>
            <p>{movie.Year}</p> 
        </div>

        <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.title} />
        </div>

        <div>
            <span>{movie.Type}</span>
            <span>{movie.Title}</span>
        </div>
    </div>
  )
}

export default MovieCard
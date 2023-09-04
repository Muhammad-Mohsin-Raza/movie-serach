import React, { useState, useEffect } from "react";
import "./app.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
const API_KEY = "http://www.omdbapi.com/?i=tt3896198&apikey=a1721fe1";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieTerm,setMovie]=useState("");
  const getMovie = async (title) => {
    const data = await fetch(`${API_KEY}&s=${title}`);
    const resp = await data.json();
    console.log(resp.Search);
    setMovies(resp.Search);
  };

  useEffect(() => {
    getMovie("Spider Man");
  }, []);

  return (
    <div className="app">
      <h1>Movie World</h1>
      <div className="search">
        <input placeholder="Search here" value={movieTerm} onChange={(e) => setMovie(e.target.value)} />
        <img src={SearchIcon} alt="Search" onClick={() => {getMovie(movieTerm)}} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.movies);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.table(movies)
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img key={movie.id} src={movie.poster} alt={movie.title} className="row__poster" />
        ))}
      </div>
    </div>
  );
}

export default Row;

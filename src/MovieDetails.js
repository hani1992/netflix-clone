import React from "react";
import { useStateValue } from "./StateProvider";
import "./MovieDetails.css";

function MovieDetails() {
  const [{ movies }, dispatch] = useStateValue();
  // console.log('movie: ', movies.movie.id)
  return (
    <div className="movieDetails">
      <div
        className="container"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${movies?.movie?.background})`,
          backgroundPosition: "top",
        }}
      >
        <div className="container__contents">
        <h1 className="container__title">{movies?.movie?.title}</h1>
        <h1 className="container__category">2020 | 1 Season | {movies?.movie?.category}</h1>
          <h1 className="container__description">{movies?.movie?.description}</h1>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

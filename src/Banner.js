import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import './Banner.css'
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests("").getAllMovies);
    
      setMovie(
        request.data.movies[
          Math.floor(Math.random() * request.data.movies?.length - 1)
        ]
      );
    }
    fetchData();
    return requests;
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${movie?.background})`,
        backgroundPosition: "top",
      }}
    >
      <div className="banner__contents">
        <h1 className='banner__title'>{movie?.title}</h1>
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>
        <h1 className='banner__description'>{movie?.description}</h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;

import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import requests from "./requests";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Row({ title, fetchUrl }) {
  const [{ movies }, dispatch] = useStateValue();
  const [movieState, setMovies] = useState([]);

  useEffect(() => {
    console.log("inside useEffect");
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.movies);
      console.log(request.data.movie);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const addToMovie = (movie) => {
    console.log("movie from context: ", movie);
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_MOVIE",
      item: {
        movie: movie,
      },
    });
  };

  const handleDeleteMovie = async (id) => {
    console.log("going to delete movie Id: ", id);
    await axios.delete(requests(id).deleteMovie).then((response) => {
      if (response.data != null) {
        alert("Movie deleted successfully");
        console.log(response);
        setMovies(response.data.movies);
      }
    });
  };
  // console.table(movies)
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movieState.map((movie) => (
          <div className="row__content">
            {console.log("movie.id: ", movie)}
            <img
              key={movie.id}
              src={movie.poster}
              alt={movie.title}
              className="row__poster"
            />
            <div className="row__button">
              <HighlightOffIcon onClick={() => handleDeleteMovie(movie.id)} />
              <Link to="edit">
                <EditIcon onClick={() => addToMovie(movie)} />
              </Link>
              <Link to="title">
                <SearchIcon onClick={() => addToMovie(movie)} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;

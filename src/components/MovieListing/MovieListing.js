import React from "react";
import "./MovieListing.css";
import { useSelector } from "react-redux";
import {
  GetAllMovies,
  GetAllShows,
  GetLoader,
} from "../../features/movies/slice";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const loading = useSelector(GetLoader);
  console.log("hello", loading);
  const movies = useSelector(GetAllMovies);
  const shows = useSelector(GetAllShows);

  let renderMovies,
    renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="movies-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <>
      <div>
        <div className="movie-wrapper">
          <div className="movie-list">
            <h2 className="movie-tag">Movies</h2>
            { !loading ? (
              <div style={{ color: "white", fontSize: "40px" }}>Loading...</div>
            ) : (
              <div className="movie-container">{renderMovies}</div>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="movie-wrapper">
          <div className="movie-list">
            <h2 className="movie-tag">Shows</h2>
            { !loading ? (
              <div style={{ color: "white", fontSize: "40px" }}>Loading...</div>
            ) : (
              <div className="movie-container">{renderShows}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieListing;

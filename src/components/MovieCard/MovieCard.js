import React from "react";
import "./MovieCard.css"
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  const { data } = props;
  return (
    <div className="card-item">
      <Link style={{textDecoration: 'none'}} to={`/movie/${data.imdbID}`}>
      <div className="card-inner">
        <div className="card-top">
          <img src={data.Poster} alt={data.title} className="Poster-img" />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4 className="Title">{data.Title}</h4>
            <p className="Year">{data.Year}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

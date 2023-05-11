import React, { useEffect } from "react";
import  MovieListing  from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/slice";
export default function Home() {

  const dispatch = useDispatch();
  
  const term ="Marvel";
  useEffect(() => {
       dispatch(fetchAsyncMovies(term));
       dispatch(fetchAsyncShows(term));
  }, [dispatch]);
  return (
    <>
     <MovieListing />
    </>
  );
}

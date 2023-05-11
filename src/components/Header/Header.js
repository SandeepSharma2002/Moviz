import React, { useState } from 'react'
import "./Header.css"
import User_img from "./User.webp"
import { Link } from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows, removeMovieAndShow, toggleLoader} from "../../features/movies/slice";

export default function Header() {
  const [term, setTerm] =  useState("");
  const dispatch = useDispatch();
  const submitHandler=(e)=>{    
       e.preventDefault();
       if (term !== "") {
       dispatch(removeMovieAndShow());
       dispatch(toggleLoader(false));
       dispatch(fetchAsyncMovies(term));
       dispatch(fetchAsyncShows(term));
       setTerm("");
       }
  }
  return (
    <div className="header">
      <Link style={{textDecoration: 'none'}} to="/"><div className="logo">Moviz</div></Link>
      <div className='search-bar'>
      <form onSubmit={submitHandler} className='search-form'>
        <input className=' '  type="text" value={term} placeholder='Search Movies or Shows' onChange={(e)=> setTerm(e.target.value)}/>
        <button type="submit" ><i className='btn fa fa-search'></i></button>
      </form></div>
        <div className="userImg">
          <Link to="/login"><img className='sign-in-logo' src= {User_img} alt="user" /></Link>
        </div>
      </div>
  )
}

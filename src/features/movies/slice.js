import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiKey } from "../../common/apis/ApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async (term)=>
{
    const response = await fetch(`http://www.omdbapi.com/?&apikey=${ApiKey}&s=${term}&type=movie`)
    let actualData = await response.json();
    return actualData;
})
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',async (term)=>
{
    const response = await fetch(`http://www.omdbapi.com/?&apikey=${ApiKey}&s=${term}&type=series`)
    let actualData = await response.json();
    return actualData;
})
export const fetchAsyncMovieOrShow = createAsyncThunk('movies/fetchAsyncMovieOrShow',async (id)=>
{
    const response = await fetch(`http://www.omdbapi.com/?&apikey=${ApiKey}&i=${id}&Plot=full`)
    let actualData = await response.json();
    return actualData;
})
const initialState ={
   movies: {},
   shows: {},
   MovieOrShow: {},
   Loader: false, 
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeMovieOrShow:(state) =>{
            state.MovieOrShow ={};
        },
        removeMovieAndShow:(state) =>{
            state.movies ={};
            state.shows ={};
        },
        toggleLoader:(state,payload)=>{
            state.Loader = payload.payload;
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]: ()=>{},
        [fetchAsyncMovies.fulfilled]: (state,{payload})=>{ return {...state, movies: payload,Loader: true}; },
        [fetchAsyncMovies.rejected]: ()=>{ console.log("Rejected")},
        [fetchAsyncShows.fulfilled]: (state,{payload})=>{ return {...state, shows: payload,Loader: true}; },
        [fetchAsyncMovieOrShow.fulfilled]: (state,{payload})=>{ return {...state, MovieOrShow: payload}; },
    }
});
export const GetAllMovies = (state)=> state.movies.movies;
export const GetSelectedMovieOrShow = (state)=> state.movies.MovieOrShow;
export const GetAllShows = (state)=> state.movies.shows;
export const GetLoader = (state)=> state.movies.Loader;
export const { removeMovieOrShow , removeMovieAndShow , toggleLoader} = movieSlice.actions;
export default movieSlice.reducer;
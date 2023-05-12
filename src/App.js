import { Route, Routes} from 'react-router-dom';
// import './App.scss';
import React from 'react';
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetail from './components/MovieDetail/MovieDetail';
import LoginPage from './components/LoginPage/LoginPage';
  
function App() {
  return (
    <>
    <Header/>
    <div className='container'>
    <Routes>
      <Route exact path='/moviz' exact element = {<Home/>}></Route>
      <Route exact path='/movie/:imdbID' exact element = {<MovieDetail/>}></Route>
      <Route exact path= '*' element = {<PageNotFound/>}></Route>
      <Route exact path= '/login' element = {<LoginPage/>}></Route>

    </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;

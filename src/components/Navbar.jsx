import React from 'react'
import movie_clapper from "../assets/movie_clap.png";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='flex  items-center space-x-8  pl-3 py-4  backdrop-blur-md border border-white/20 rounded-2xl shadow-lg bg-gray-50'>
        <img  className='w-[40px] h-[40px]'  src={movie_clapper} alt="movie_clapper" />
        <Link to="/" className='text-2xl text-blue-500 font-bold'>Movies</Link>
        <Link to="/watchlist" className='text-2xl text-blue-500 font-bold' >Watchlist</Link>



    </div>
  )
}

export default Navbar
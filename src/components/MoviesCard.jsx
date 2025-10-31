import React from 'react'
import Watchlist from './Watchlist';


function MoviesCard({ poster_path, name, handleAddToWatchlist, movieObj, handleRemoveFromWatchlist, watchlist }) {

  function doesContain(movieObj) {

    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true
      }
    }
      return false
  }

  

  return (
    <div className=' relative w-[170px] h-[40vh] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end ' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>


      {doesContain(movieObj) ? (<div onClick={() => handleRemoveFromWatchlist(movieObj)} className='m-2 h-8 w-8 rounded-lg bg-gray-900/90 flex justify-center items-center'>&#10060;</div>) :
        (<div onClick={()=>(handleAddToWatchlist(movieObj))} className='m-2 h-8 w-8 rounded-lg bg-gray-900/90 flex justify-center items-center' >
          &#128525;
        </div>
        )}


      <div className='text-white text-x w-full p-2 absolute bottom-0 text-center bg-gray-900/75 rounded-b-xl '>
        {name}
      </div>

    </div >

  )
}

export default MoviesCard
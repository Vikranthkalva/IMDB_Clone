import React, { useState } from 'react'
import { useEffect } from 'react'
import MoviesCard from './MoviesCard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({handleAddToWatchlist , handleRemoveFromWatchlist, watchlist}) {
    const[movies, setMovies]=useState([])
    const[pageNo, setPageNo]=useState(1)

    const handlePrev =()=>{
        setPageNo(pageNo-1)
        if(pageNo<=1){
            setPageNo(1)
        }
    }

    const handleNext =()=>{
        setPageNo(pageNo+1)
    }

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7ba6eb8e7f5d62004ea14afd082590bc&language=en-US&page=${pageNo}`).then(function(res){
           setMovies(res.data.results);
           console.log(res.data.results);
        })


    }, [pageNo])

    return (

        <div className='p-5'>
            <div className='text-2xl m-5 font-bold text-center'>
                Trending Movies
            </div>

            <div className='flex flex-row flex-wrap justify-around gap-4 '>
                {movies.map((movieObj)=>{
                    return <MoviesCard key={movieObj.id} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddToWatchlist={handleAddToWatchlist} movieObj={movieObj} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist}/>
                })}
                

            </div>
 
    <Pagination pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext}/>

        </div>

    )
}

export default Movies
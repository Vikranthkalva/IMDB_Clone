import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './components/Banner'
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {

  let [watchlist, setWatchlist] = useState([])

  let handleAddToWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj]
    localStorage.setItem("moviesApp", JSON.stringify(newWatchlist))
    setWatchlist(newWatchlist)
    console.log("Added to watchlist:", newWatchlist);

  }

  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => movie.id !== movieObj.id)
    setWatchlist(filteredWatchlist)
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchlist)) // 🔥 this line was missing
    console.log("Removed from watchlist:", filteredWatchlist)
  }

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if (!moviesFromLocalStorage) {
      return
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage))
  }, [])


  return (
    <>
      <div>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<> <Banner /> <Movies watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} /></>}></Route>
            <Route path='/watchlist' element={<Watchlist watchlist={watchlist} setwatchlist={setWatchlist} />}></Route>


          </Routes>

        </BrowserRouter>
      </div>
    </>
  )
}

export default App

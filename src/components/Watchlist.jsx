import React, { useEffect, useState } from 'react'
import genreids from "@/Utility/genre";

function Watchlist({ watchlist, setwatchlist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(['All Genres']);
  const [currGenre, setCurrGenre] = useState('All Genres');

  // ✅ handle search
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // ✅ handle genre filter
  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  // ✅ sort increasing
  const sortInc = () => {
    const sorted = [...watchlist].sort((a, b) => a.vote_average - b.vote_average);
    setwatchlist(sorted);
  };

  // ✅ sort decreasing
  const sortDec = () => {
    const sorted = [...watchlist].sort((a, b) => b.vote_average - a.vote_average);
    setwatchlist(sorted);
  };

  // ✅ update genre list when watchlist changes
  useEffect(() => {
    const temp = watchlist.map((movieObj) => genreids[movieObj.genre_ids[0]]);
    setGenreList(['All Genres', ...new Set(temp)]);
  }, [watchlist]);

  // ✅ filter movies by genre
  const filteredMovies = watchlist.filter((movieObj) => {
    if (currGenre === 'All Genres') return true;
    return genreids[movieObj.genre_ids[0]] === currGenre;
  });

  // ✅ search filter
  const searchedMovies = filteredMovies.filter((movieObj) =>
    movieObj.original_title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Genre filter buttons */}
      <div className="flex justify-center flex-wrap m-4 gap-6">
        {genreList.map((genre) => (
          <div
            key={genre}
            onClick={() => handleFilter(genre)}
            className={`flex h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center justify-center cursor-pointer 
              ${currGenre === genre ? 'bg-blue-400' : 'bg-gray-400/50'}`}
          >
            {genre}
          </div>
        ))}
      </div>

      {/* Search input */}
      <div className="flex justify-center my-4">
        <input
          type="text"
          onChange={handleSearch}
          value={search}
          placeholder="Search Movies Here"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4 rounded-xl text-center"
        />
      </div>

      {/* Movies table */}
      <div className="overflow-hidden rounded-lg border border-gray-200 m-10">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b h-10">
            <tr>
              <th>Name</th>
              <th className="flex justify-center items-center">
                <div onClick={sortInc} className="p-2 cursor-pointer">
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div onClick={sortDec} className="p-2 cursor-pointer">
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {searchedMovies.map((movieObj) => (
              <tr className="border-b-2" key={movieObj.id}>
                <td className="flex items-center px-6 py-4">
                  <img
                    className="h-[10rem] w-[10rem] object-cover rounded-lg"
                    src={
                      movieObj.poster_path
                        ? `https://image.tmdb.org/t/p/original/${movieObj.poster_path}`
                        : "https://via.placeholder.com/150?text=No+Image"
                    }
                    alt={movieObj.original_title}
                  />
                  <div className="mx-10 font-semibold">{movieObj.original_title}</div>
                </td>
                <td>{movieObj.vote_average}</td>
                <td>{movieObj.popularity}</td>
                <td>{genreids[movieObj.genre_ids[0]]}</td>
                <td
                  onClick={() => {
                    let filteredWatchlist = watchlist.filter((movie) => movie.id !== movieObj.id)
                    setwatchlist(filteredWatchlist)
                    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchlist)) // ✅ sync with localStorage
                  }}
                  className='text-red-800 hover:cursor-pointer hover:text-red-600 font-bold'
                >
                  Delete
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;

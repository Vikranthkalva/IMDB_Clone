# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# 🎬 IMDb Clone (React + Vite + Tailwind CSS)

A modern **IMDb Clone** web application built using **React**, **Vite**, and **Tailwind CSS**, integrated with **The Movie Database (TMDB) API**.  
Users can browse trending movies, add/remove movies from a **watchlist**, and filter by **genres, ratings, and popularity** — with **localStorage** support for persistence.

---

## 🚀 Features

✅ **Trending Movies Page**
- Fetches movies from TMDB API  
- Displays movie posters, ratings, and titles  
- Add or remove movies from your watchlist  
- Pagination support

✅ **Watchlist Page**
- Displays saved movies from localStorage  
- Filter movies by genre  
- Sort by ratings or popularity (ascending/descending)  
- Search by movie title  
- Delete movies (auto-updates localStorage)

✅ **Persistent Storage**
- Movies are saved in the browser’s localStorage  
- Watchlist remains even after refresh

✅ **Responsive UI**
- Fully responsive design using Tailwind CSS  
- Smooth hover animations and clean layout

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React.js** | UI library for building components |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS** | Modern utility-first CSS framework |
| **Axios** | Fetch data from TMDB API |
| **React Router** | Page routing between Home and Watchlist |
| **Font Awesome** | Icons for rating and actions |

---

## 🧩 Folder Structure

imdb_clone/
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Banner.jsx
│ │ ├── Movies.jsx
│ │ ├── MoviesCard.jsx
│ │ ├── Pagination.jsx
│ │ └── Watchlist.jsx
│ ├── Utility/
│ │ └── genre.js
│ ├── App.jsx
│ ├── App.css
│ └── main.jsx
├── index.html
├── package.json
└── vite.config.js


---

## ⚙️ Setup Instructions

### 1. Clone this repository
```bash
git clone https://github.com/yourusername/imdb_clone.git
cd imdb_clone

2. Install dependencies
npm install

3. Get your TMDB API key
Visit https://www.themoviedb.org
Create an account and generate a free API key
Replace your key in the API request inside Movies.jsx:
axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=${pageNo}`)

4. Run the development server
npm run dev
Then open the given local URL (usually http://localhost:5173/).

🧠 Components Overview
🔹 App.jsx

Root component that handles routing between pages

Stores watchlist in a state variable

Syncs data with localStorage

🔹 Movies.jsx

Fetches trending movies from TMDB

Renders list of movie cards

Supports pagination

🔹 MoviesCard.jsx

Displays each movie’s poster, title, and rating

Allows adding/removing from watchlist

🔹 Watchlist.jsx

Shows saved movies from localStorage

Supports:

Searching by title

Filtering by genre

Sorting by rating (asc/desc)

Deleting movies (updates localStorage immediately)

🔹 Navbar.jsx

Provides navigation links between Home and Watchlist

🔹 Banner.jsx

Optional featured movie/banner section

🧩 LocalStorage Logic
Action	Description
Add Movie	Adds movie to watchlist and updates localStorage
Remove Movie	Removes movie and syncs localStorage
Watchlist Load	Fetches movies from localStorage on app start
// Example snippet
localStorage.setItem("moviesApp", JSON.stringify(newWatchlist))
setWatchlist(newWatchlist)

🖼️ Screenshots (Optional)

💡 Future Improvements
Dark/Light mode toggle
Movie details popup or page
User login and cloud sync
“Add to favorites” or rating system

👨‍💻 Author

Lucky Lucky
React Developer | Building clean, functional, and modern web apps.

📄 License

This project is licensed under the MIT License — feel free to modify and use it.


---

Would you like me to make this README **auto-generate your TMDB API key setup section** dynamically (e.g., using `.env` file example like `.env.local` → `VITE_TMDB_API_KEY`)?  
That would make your code cleaner and ready for deployment.

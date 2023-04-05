import { Route, Routes } from "react-router-dom";

import Home from "Pages/Home";
//import Movies from "Pages/Movies";
import MovieDetails from "Pages/MovieDetails";
import MoviesPage from "Pages/Movies";

import Layout from "./Layout";
import Cast from "./Movies/Cast";
import Reviews from "./Movies/Reviews";





export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}/>
              <Route path="reviews" element={<Reviews />}/>
        </Route>

      </Route>  
    </Routes>
  )
}

// {/* <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div> 

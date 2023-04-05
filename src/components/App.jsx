import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import Layout from "./Layout";

const Home = lazy(()=> import('../Pages/Home'))
const MoviesPage = lazy(()=> import('../Pages/Movies'))
const MovieDetails = lazy(()=> import('../Pages/MovieDetails'))

const Cast = lazy(()=> import('../components/Movies/Cast'))
const Reviews = lazy(()=> import('../components/Movies/Reviews'))



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


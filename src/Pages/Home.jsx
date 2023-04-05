//import Home from "components/Home/Home";
import { fetchMovie } from "API/API";
import HomeList from "components/Movies/HomeList";
import { useEffect, useState } from "react";


const Home = (  ) => {
  const[movies, setMovies] = useState(null)

    useEffect(()=>{ 
      fetchMovie('/trending/movie/day').then(data=>{
        setMovies(data.results)
      })
      .catch(error=>console.log(error))   
    },[])

      return( 
        <>
         {movies && <HomeList movies={movies} /> }
        </>
    )
}
export default Home
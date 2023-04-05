import { fetchMovie } from 'API/API';
import {useState, useEffect} from 'react'
import { Link, useSearchParams, useLocation } from "react-router-dom";
   
const MoviesPage = () => {

      const location = useLocation();
// console.log(location)

   const [movies, setMovies]= useState([])
   const [searchParams, setSearchParams] = useSearchParams()
   const query = searchParams.get('query') ?? ' ';
   useEffect(() => {
      if(!query) return
      fetchMovie('/search/movie', query).then(resp => {
         if(resp.results.length === 0){
            return ('Sorry, but nothing was found')
         }      
         return setMovies(resp.results)
      })
      .catch(error=>console.log(error))
      },[query])

   const updateQueryString= ev=>{  
      const movieIdValue = ev.target.value.trim();
      if(movieIdValue === ''){
         return setSearchParams({})
      }
      setSearchParams({query:movieIdValue})
   }

   return(
    <> 
    <form onSubmit={(e) => e.preventDefault()}>
      <input name='search' type='text' value={query}onChange={updateQueryString} ></input>
    <button type='submit'>Search</button>
    </form>


    
    <ul>
      {movies.map(movie=>{
         return(
            <li key={movie.id}>
               <Link to={`/movies/${movie.id}`} 
               state={{from: location}}
               >{movie.title}</Link>
            </li>
         )
      })
   }
   
   </ul>
   </>
   
   )
}

export default MoviesPage
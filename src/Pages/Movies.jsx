import { fetchMovie } from 'API/API';
import {useState, useEffect} from 'react'
import { Link, useSearchParams } from "react-router-dom";
import MovieDetails from './MovieDetails';
//   useLocation
const MoviesPage = ({movieId}) => {

   // const location = useLocation()
   // const backLink = location.state && '/movies'

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
      console.log(movieIdValue)
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

    {/* <BackLink to={backLink}>Back</BackLink> */}
    
    <ul>
      {movies.map(movie=>{
         return(
            <li key={movie.id}>
               <Link to={`${movie}`}>{movie.title}</Link>
            </li>
         )
      })
   }
    
         {!movies && (<MovieDetails movieId={movies}/>)}
      
   
    </ul>

    </>
    
   )
}

export default MoviesPage
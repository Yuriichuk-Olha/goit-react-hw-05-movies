import { Link, useLocation } from "react-router-dom";

const HomeList = ({movies}) =>{
    const location = useLocation()
   // console.log(movies)
     if (!movies) return 
    return(
        <>
        <h1>Trending today</h1>
        <ul className="list"> 
        {movies.map(movie=>{
          return(
            <li key={movie.id}>
        <Link to={`/movies/${movie.id}`} state={location} >
            {movie.original_title}
        </Link>
        </li>
            )  
        })}
        
        </ul>
       
        </>
    )
}
export default HomeList
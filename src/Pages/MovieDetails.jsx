import { fetchMovie } from "API/API"
import { Suspense, useEffect, useRef, useState } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom"

const MovieDetails = ()=>{
    const location = useLocation();
    const backLinkLocstion = useRef(location.state?.form ?? '/movies')
    console.log(backLinkLocstion)
    
    console.log(location)


    const {movieId} = useParams()
    const [movieData, setMovieData] = useState(null);

    useEffect(()=>{
        fetchMovie(`movie/${movieId}`).then(resp=>{
            setMovieData(resp)
        })
        .catch(error=>console.log(error))
    },[movieId])

    if (!movieData) {
        return <div>Loading...</div>;
      }

      const { title, overview, popularity, genres, release_date, poster_path, vote_average} = movieData
      return(
            <>
            <Link to={backLinkLocstion.current}>Back</Link>
            
    <h1>{title}</h1>
    <img alt={poster_path} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} width='250'/>
    <h2>Overview</h2>
    <p> {overview}</p>
    <h3>Genres</h3>
    <p>{genres ? (genres.map(({ name }) => name).join(', ')) : " "}</p>
    <p>Release date: {release_date}</p>
    <p>Popularity: {popularity}</p>
    <p>Vote average: {vote_average}</p>
    
    <ul>
        <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet/>
        </Suspense>
        </>
        )
}
export default MovieDetails
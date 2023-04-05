import { fetchMovie } from "API/API"
import { useEffect, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom"

const MovieDetails = ()=>{
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
    <h1>{title}</h1>
    <img alt={movieData.backdrop_path} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} width='250'/>
    <h2>Overview</h2>
    <p> {overview}</p>
    <h3>Genres</h3>
    <p>{genres ? (genres.map(({ name }) => name).join(', ')) : " "}</p>
    <p>Release date: {release_date}</p>
    <p>Popularity: {popularity}</p>
    <p>Vote average: {vote_average}</p>
    
    
    <ul>
        <li>
            <Link to="cast">Cast</Link>
        </li>
        <li>
            <Link to="reviews">Reviews</Link>
        </li>
        </ul>
        <Outlet/>
        </>
        )
}
export default MovieDetails
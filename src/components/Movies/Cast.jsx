import { fetchMovie } from "API/API"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Cast = () =>{
    const [cast, setCast] = useState(null)
    const {movieId}  = useParams()
    
    useEffect(()=>{
        if(!movieId) return
    
    fetchMovie(`/movie/${movieId}/credits`).then(data=>{
       return setCast(data.cast)
    })
    .catch(error=>console.log(error))
    },[movieId])
    // console.log(cast)
    return (
        <>
        {cast && (cast.map(({id,profile_path,name,character})=>{
            return <li key={id}>
                <img scr={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} width='100'/>
                <h2>{name}</h2>
                <p>Character: {character}</p>
            </li>
        }))
        }
        </>
       )
    
}
export default Cast
import { fetchMovie } from "API/API"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Reviews = () =>{
    const [reviews, setReviews] = useState([])
    const { movieId } = useParams()

    useEffect(()=>{
        if(!movieId) return
    
    fetchMovie(`/movie/${movieId}/reviews`).then(data=>{
        return setReviews(data.results)
    })
    .catch(error=>console.log(error))
    },[movieId])

    // console.log(reviews)
    return (
        <>
       
        {reviews ? (reviews.map(({author,id,content})=>{
            return <li key={id}>
                <h2>Author: {author}</h2>
                <p>Content: {content}</p>
            </li>
        })
        ) 
        : (<h3>We do not have any reviews for this movie.</h3>)
    }
        </>

    )
}
export default Reviews
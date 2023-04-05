import axios from "axios"
//const   api_key='f5a68a81db900311929f7e0e465c0c04'

export const fetchMovie = async(path,query) => {
    const response = await axios.get(`https://api.themoviedb.org/3/${path}`,{
        method: 'get',
        params:{
            api_key: 'f5a68a81db900311929f7e0e465c0c04',
            query:query,
        }
    })
    return response.data;
} 

// export const fetchMovie =(path, page, guery)=>{
//     fetch(`https://api.themoviedb.org/3/movie/550?api_key=${API_Key}&page=${page}`).then(response=>response.json())
// }
import React, { useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { useEffect } from 'react'
import { API_KEY, imageUrl } from '../../Constants/constants'
import Youtube from 'react-youtube'

function RowPost(props) {

  const [movies, setMovies] = useState([])
  // const [urlId, setUrlId] = useState(null)

  useEffect(() => {
    axios.get(props.url).then((res) => {
      const films = res.data.results
      setMovies(films)
    }).catch((err) => {
      alert('Network error',err.message)
    })
  

  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
     
      autoplay: 1,
    },
  };

  const handleImgClick = ((id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) =>{
      console.log('responsedata',response.data)
      if (response.data.results.length !== 0){
        props.setUrlId(response.data.results[0])
      }else{
        console.log('Trailer not available')
        props.setUrlId(null)
      }
    })
    .catch((err) => {
      console.log('Trailer Not available')
    })
  })
  
  return (
    <div className='row-post'>
        <h2 className="title">{props.title}</h2>
        <div className="posters">
          {
            movies.map((movie) =>(
              

              <img key={movie.id} onClick={() => handleImgClick(movie.id)} className={ props.isSmall ? 'smallPoster' :"poster"} src={`${imageUrl + movie.backdrop_path}`} alt="Poster" />

            ))
          }
        
        </div>
    </div>
  )
}

export default RowPost
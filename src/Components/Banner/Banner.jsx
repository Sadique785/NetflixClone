import React, {useEffect, useState} from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/constants'


function Banner() {

  const [movie, setMovie] = useState()

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      // console.log(response.data.results.length);
      const results = response.data.results;
      const randomIndex = Math.floor(Math.random() * results.length);
      const randomMovie = results[randomIndex]
      console.log(randomMovie)
      setMovie(randomMovie)

    })
  
  }, []);
  if (!movie || !movie.backdrop_path) {
    return null; // or a loading spinner
  }


  const backgroundImageUrl = `${imageUrl}${movie.backdrop_path}`;
  console.log('Background Image URL:', backgroundImageUrl);
  

  return (

    <div style={{ backgroundImage: `url(${backgroundImageUrl})` }} className='banner'>
      
        <div className="content">
            <h1 className="title">{movie ? movie.title : ''}</h1>
            <div className="banner_buttons">
            <button className="button">Play</button>
            <button className="button">My list</button>
            </div>
            <h1 className="description">{movie ? movie.overview : ''}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
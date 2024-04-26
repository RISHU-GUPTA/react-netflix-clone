import React, { useEffect } from 'react'
import './row.css'
import { useState } from 'react';
import instance from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const base_url = "https://image.tmdb.org/t/p/original";
export default function Row({title,fetchUrl,isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, settrailerUrl] = useState("")
    useEffect(() => {
      instance.get(fetchUrl).then(res=>{
       
        setMovies(res.data.results);
      })
    
      return () => {
        
      }
    },[fetchUrl])

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const handleClick=(movie)=>{
      console.log("jhjh",movie)
      if(trailerUrl){
        settrailerUrl('');
      }else{
        movieTrailer(movie?. name ||movie?. title||'').then ((url) =>{
          const urlParams = new URLSearchParams (new URL(url). search);
         settrailerUrl(urlParams.get( 'v'));
          
         
      }) .catch ( (error) => console. log (error));
    }
  }
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row__posters'>
        {movies.map((mv,i)=>(
          <img onClick={()=>handleClick(mv)} className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={i} src={`${base_url}${isLargeRow?mv.poster_path:mv.backdrop_path}`} alt={mv.name}/>
        ))}
        </div>
        { trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

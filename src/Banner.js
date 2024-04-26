import React, { useEffect, useState } from 'react'
import instance from './axios';
import requests from './request';
import './banner.css'
export default function Banner() {
    const [movie, setmovie] = useState([]);
    useEffect(() => {
      instance.get(requests.fetchNetflix0riginals).then(re=>{
        setmovie(re.data.results[Math.floor(Math.random()*re.data.results.length-1)]);
        // console.log(re.data.results[Math.floor(Math.random()*re.data.results.length-1)])
      })
    
      return () => {
        
      }
    }, [])
    
  return (
   <header className='banner' style={{backgroundSize:'cover',backgroundImage:`url(
    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
   )`}}>
    <div className='banner__contents'>
        <h1 className='banner__title'>{movie?.title||movie?.name||movie?.original_name}</h1>
        <div className='banner__buttons'>
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>{movie?.overview}</h1>
    </div>
    <div className='banner--fadeBottom'/>
    </header>
    
  )
}

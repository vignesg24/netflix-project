import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../../api/Api';
import './Banner.css';

export default function Banner() {
    const [movie,setMovie]=useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const responce = await axios.get(`${import.meta.env.VITE_REACT_APP_API}${api.fetchNetflixOrigianls}`);
            setMovie(responce.data.results[Math.floor(Math.random()* responce.data.results.length -1)]);
        return responce;
        };
        fetchData();

    },[]);

    const truncate = (str,n) =>{
        return str ?.length >n ? str.substr(0, n-1) + "..." : str;
    }
  return (
   <header className='banner'
   style={{
    backgroundSize:"cover",
    backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
   }}>
    <div className="banner-contents">
        <h1 className="banner-title">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
            <button className="banner-button">Play</button>
            <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
    </div>
    <div className="banner-fadeBottom"></div>


   </header>
  )
}

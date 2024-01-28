import React,{useEffect,useState} from 'react';
import './Row.css';
import axios from 'axios';
import YouTube from 'react-youtube';
const base_url = "https://image.tmdb.org/t/p/original";

export default function Row({title,fetchUrl,isLargeRow,videos}) {
    const [movies,setMovies]= useState([]);
    const [trailerUrl,setTrailerUrl]=useState("")
    const trailer = ["pWqUEc7odAo","N56EVgi7bJ4","n8g1hFXCKB4","zUWtaw5Fra8","33-KvBH_en8"]

    let video = trailer[Math.floor(Math.random()*trailer.length-1)];

  
    const opts = {
      height: '490',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    useEffect(() => {
      const fetchData = async () =>{
         const responce = await axios.get(`${import.meta.env.VITE_REACT_APP_API}${fetchUrl}`);
         setMovies(responce.data.results);
         return responce;
      };
      fetchData()
    },[])


    const handleClick = (movie)=>{
        setTrailerUrl(movie);
    };

    
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row-posters">
        {movies && movies.map((movie)=>(
          <img
          onClick={()=> handleClick(movie)}
          key={movie.id}
          className={`row-poster ${isLargeRow && "row-posterLarge"}`}
          src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
          alt={movie.name}
           />
        ))}
      </div>
      {trailerUrl && (
        <YouTube videoId={videos} opts={opts} />
        )}
    </div>
  )
}

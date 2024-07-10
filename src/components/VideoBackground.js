import React, { useEffect, useState } from 'react';
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from '../utils/moviesSlice';
import {useDispatch, useSelector} from 'react-redux';

const VideoBackground = ({movieId}) => {

  //const [trailerId, setTrailerId] = useState(null);
  const dispatch = useDispatch();
 const trailerVideo = useSelector(store=>store.movies?.trailerVideo)
  const getVideo = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
    const json = await data.json();
    const videos = json.results;
    let trailer = videos.filter(video=>video.type=="Trailer"&&video.name=="Final Trailer");
    !trailer? trailer = videos[0]: trailer = trailer[0];
    console.log("trailer", trailer);
    //setTrailerId(trailer.key);
    dispatch(addTrailerVideo(trailer));
  }
  useEffect(()=>{
    getVideo();
  },[]);
  
  return (
    <div>
      <iframe src={"https://www.youtube.com/embed/"+trailerVideo?.key}
              title="YouTube video player"               
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              ></iframe>
      
    </div>
  )
}

export default VideoBackground

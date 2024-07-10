import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) =>{

    const dispatch = useDispatch();

    const getVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
        const json = await data.json();
        const videos = json.results;
        let trailer = videos.filter(video=>video.type=="Trailer"&&video.name=="Final Trailer");
        !trailer? trailer = videos[0]: trailer = trailer[0];
        console.log("trailer", trailer);
        
        dispatch(addTrailerVideo(trailer));
      };
      useEffect(()=>{
        getVideo();
      },[]);

}

export default useMovieTrailer;
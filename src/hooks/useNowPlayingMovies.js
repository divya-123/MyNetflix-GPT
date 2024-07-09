import { useEffect } from "react";
import { useDispatch} from 'react-redux';
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () =>{
      //Fetch data from TMDB API and update the store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTIONS);
    const json = await data.json();
    console.log("DATA MOVIE FETCHED", json.results);
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[]);
}

export default useNowPlayingMovies;

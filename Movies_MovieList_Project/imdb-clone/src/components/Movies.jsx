// import React from 'react'

import { useEffect,useState } from "react";
import MovieCard from "./MovieCard";
import axios from 'axios'
import Pagination from "./Pagination";

function Movies({watchList,HandleAddWatchList,HandleRemoveWatchList}) {
  const [Movies,setMovies]=useState([])
  const [pageNo,setPageNo] = useState(1)

  const handlePrev=()=>{
    if(pageNo==1){
      setPageNo(pageNo)
    }
    else{
      setPageNo(pageNo-1)
    }
  }

  const handleForward=()=>{
    setPageNo(pageNo+1)
  }
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=fe0153eb08568143cd6869fed88a244e&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results)//ABOVE LINK INSIDE DATA-RESULTS
      console.log(res)
    })
  },[pageNo])// axios=>handle all http request (get=display,put=update,post=create,delete=delete)
  return (
      <div className="m-2">
        <div className="font-bold p-2 text-center text-xl font-serif">
          Trending Movies
        </div>
      <div className="flex flex-row flex-wrap justify-around space-x-4 gap-5 ">
        {Movies.map((Moviesobj)=>{
          return <MovieCard key={Moviesobj.id}  watchList={watchList} Moviesobj={Moviesobj} HandleAddWatchList={HandleAddWatchList} poster_path={Moviesobj.poster_path} name={Moviesobj.original_title} HandleRemoveWatchList={HandleRemoveWatchList} />  //ABOVE LINK INSIDE DATA-RESULTS-POSTER_PATH AND ORIGINAL_TITLE
        })}
      </div>
      <Pagination pageNo={pageNo} handleForward={handleForward} handlePrev={handlePrev}/>
    </div>
  );
}

export default Movies;


// https://api.themoviedb.org/3/movie/popular?api_key=fe0153eb08568143cd6869fed88a244e&language=en-US&page=2
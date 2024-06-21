// import React from 'react'
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  let [watchList,SetWatchList] = useState([])
  console.log("watch",watchList)
  function HandleAddWatchList(Moviesobj){
    let NewWatchList=[...watchList,Moviesobj]
    localStorage.setItem('Movies',JSON.stringify(NewWatchList))
    SetWatchList(NewWatchList)
    console.log(NewWatchList)
  }
  function HandleRemoveWatchList(Moviesobj){
    let FilterWatchList=watchList.filter((movie)=>{
      return movie.id!=Moviesobj.id
    })
    SetWatchList(FilterWatchList)
    localStorage.setItem('Movies',JSON.stringify(FilterWatchList))
  }
    useEffect(()=>{
      let StoredItems =localStorage.getItem('Movies')
      if(!StoredItems){
        return
      }
      SetWatchList(JSON.parse(StoredItems))
    },[])
  return (
    <div>
      <BrowserRouter>
      
        <Navbar />
        <Routes>
        <Route path="/" element={<><Banner/><Movies watchList={watchList} HandleAddWatchList={HandleAddWatchList} HandleRemoveWatchList={HandleRemoveWatchList} /></>} />
        <Route path="/watchlist" element={<WatchList watchlist={watchList} SetWatchList={SetWatchList} HandleRemoveWatchList={HandleRemoveWatchList}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

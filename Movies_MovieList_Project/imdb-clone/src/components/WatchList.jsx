// import React from 'react'

import { useEffect, useState } from "react";
import genreids from "../utility/genre";

function WatchList({ watchlist, SetWatchList ,HandleRemoveWatchList}) {
  console.log("w", watchlist);
  let [Search, setSearch] = useState("");
  let [Genre, SetGenre] = useState(["All Genre"]);
  let [CurrentGenre, setCurrentGenre] = useState("All Genre");

  function HandleSearchBar(e) {
    setSearch(e.target.value);
  }

  let HandleFilterGenre = (Generlist) => {
    setCurrentGenre(Generlist);
  };

  function SortedIncreasing() {
    let SortedIncrease = watchlist.sort((Movie_A, Movie_B) => {
      return Movie_A.vote_average - Movie_B.vote_average; //compare first to last and sort small value to high from top to bottom
    });

    SetWatchList([...SortedIncrease]);
  }
  function SortedDecreasing() {
    let SortedDecrease = watchlist.sort((Movie_A, Movie_B) => {
      return Movie_B.vote_average - Movie_A.vote_average; //compare last to first and sort small value to high from bottom to top
    });
    SetWatchList([...SortedDecrease]);
  }
  useEffect(() => {
    let temp = watchlist.map((Movieobj) => {
      return genreids[Movieobj.genre_ids[0]];
    });
    temp = new Set(temp);
    SetGenre(["All Genre", ...temp]);
    console.log(temp);
  }, [watchlist]);
  return (
    <>
      <div className="font-serif flex justify-center flex-wrap m-4 gap-4">
        {Genre.map((Genrelist) => {
          return (
            <div
              key={Genrelist}
              onClick={() => HandleFilterGenre(Genrelist)}
              className={
                CurrentGenre == Genrelist
                  ? "h-[3rem] w-[6rem] border flex justify-center items-center bg-blue-500 rounded-xl"
                  : "h-[3rem] w-[6rem] border flex justify-center items-center bg-gray-300 rounded-xl"
              }
            >
              {Genrelist}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-6 ">
        <input
          onChange={HandleSearchBar}
          value={Search}
          type="text"
          placeholder="Search Movies"
          className="h-[2.5rem] w-[15rem] bg-gray-200 font-serif px-6"
        ></input>
      </div>
      <div className="overflow-hidden rounded-lg border  border-gray-500  m-10 font-serif">
        <table className="w-full text-blue-800 text-center">
          <thead className="border-b-2  border-gray-400 ">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div onClick={SortedIncreasing} className="p-2">
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div onClick={SortedDecreasing} className="p-2">
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((Movieobj)=>{
              if(CurrentGenre=='All Genre'){
                return true
              }else{
                return genreids[Movieobj.genre_ids[0]] ==CurrentGenre
              }
            })
              .filter((Movieobj) => {
                return Movieobj.title
                  .toLowerCase()
                  .includes(Search.toLocaleLowerCase()); //Each movie title is converted to lowercase using toLowerCase().The search term is converted to lowercase using toLocaleLowerCase(). The includes() method checks if the lowercase search term is a substring of the lowercase movie title.Only movies that match the search criteria are included in the filteredMovies array.
              })
              .map((Movieobj) => {
                return (
                  <tr
                    key={Movieobj.id}
                    className="border-b-2  border-gray-400 "
                  >
                    <td className="flex items-center px-4 py-4">
                      <img
                        className="h-[7rem] w-[13rem] flex justify-center "
                        src={`https://image.tmdb.org/t/p/original/${Movieobj.backdrop_path}`}
                      />
                      <div className="mx-8">{Movieobj.title}</div>
                    </td>
                    <td>{Movieobj.vote_average}</td>
                    <td>{Movieobj.popularity}</td>
                    <td>{genreids[Movieobj.genre_ids[0]]}</td>
                    <td onClick={()=>HandleRemoveWatchList(Movieobj)} className="text-red-800">Delete</td>
                  </tr> //[Movieobj.genre_ids[0]]=>only it's got a value(number) ,so create genreids file so generids got a value(action ,comedy,animation something)
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;

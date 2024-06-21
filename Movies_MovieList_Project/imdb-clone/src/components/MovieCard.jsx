// import React from 'react'

// import WatchList from "./WatchList";

function MovieCard({
  Moviesobj,
  HandleAddWatchList,
  poster_path,
  name,
  watchList,
  HandleRemoveWatchList,
}) {
  function DoesContain(Moviesobj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == Moviesobj.id) {
        return true;
      }
    }
    return false;
  }
  //another method
  
  // function DoesContain(Moviesobj){
  //   return watchList.some(movie=>movie.id==Moviesobj.id);
  // }
  return (
    <div
      className="h-[70vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110  duration-300 hover:cursor-pointer border flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {DoesContain(Moviesobj) ? (
      
          <div
            onClick={() => 
              HandleRemoveWatchList(Moviesobj)
            }
            className="m-2 rounded-lg bg-gray-900/60 h-[7] w-[8] p-1.5 flex justify-center items-center border-black"
          >
            &#10060;
          </div>
        
      ) : (
        <div
          onClick={() => 
            HandleAddWatchList(Moviesobj)
          }
          className="m-2 rounded-lg bg-gray-900/60 h-[7] w-[8] p-1.5 flex justify-center items-center border-black"
        >
          &#128525;
        </div>
      )}

      <div className="text-white w-full text-center bg-blue-600 px-3 font-serif">
        {name}
      </div>
    </div> //{()=>{HandleAddWatchList(Moviesobj)}} == external function called method
  );
}

export default MovieCard;

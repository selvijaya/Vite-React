// import React from 'react'
import Logo from "../movie-logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex border items-center space-x-8 pl-4 py-2 font-serif">
        <img className="w-[50px] bg-blue-500 p-2 rounded-full " src={Logo} alt="" />

      <Link className="text-blue-500 text-xl font-bold" to="/">
        Movies
      </Link>
      <Link className="text-blue-500 text-xl font-bold" to="/watchlist">
        WatchList
      </Link>
    </div> //space-x-10=space between x-axis items pl-4=padding left py-2=padding y-axis w-[50px]=50px width text-xl=font size text-blue-500=font is blue color 500 means font color density
  );
}

export default Navbar;

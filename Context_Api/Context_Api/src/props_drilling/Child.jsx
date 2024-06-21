// import React from 'react'

import Grandauter from "./Grandauter"
import Grandson from "./Grandson"
import { Familys } from "./Familys"
import { useContext } from "react"

function Child() {
    const message =useContext(Familys)
  return (
    <div className="child">
        <h2>children {message.MyName}</h2>
        <Grandauter/>
        <Grandson/>
    </div>
  )
}

export default Child
// import React from 'react'
import { Familys } from "./Familys"
import { useContext } from "react"
function Grandauter() {
    const message=useContext(Familys)
  return (
    <div className="granddauter">
        <h3>Grandauter {message.MyName}</h3>
    </div>
  )
}

export default Grandauter
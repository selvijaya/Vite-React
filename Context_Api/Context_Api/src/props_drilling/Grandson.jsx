// import React from 'react'
import { Familys } from "./Familys"
import { useContext } from "react"
function Grandson() {
    const message = useContext(Familys)
  return (
    <div className="grandson">
        <h3>Grandson {message.MyName}</h3>
    </div>
  )
}

export default Grandson
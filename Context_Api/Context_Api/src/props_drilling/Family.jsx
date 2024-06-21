// import React from 'react'
import Parent from "./Parent"
import { Familys } from "./Familys"
import { useContext } from "react"

function family() {
    const message=useContext(Familys)
  return (
    <div className="family">
        <h2>{message.MyName}</h2>
        <Parent/>
    </div>
  )
}

export default family
// import React from 'react'

import Child from "./Child"
import { Familys } from "./Familys"
import { useContext } from "react"

function parent() {
    const message = useContext(Familys)
  return (
    <div className="parent">
        <h1>Parent {message.MyName}</h1>
        <Child/>
    </div>
  )
}

export default parent
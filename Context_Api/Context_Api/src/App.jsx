// import React from 'react'
import './App.css'
import Family from './props_drilling/Family'
import { Familys } from './props_drilling/Familys'

function App() {
  const FullName = {
    MyName:"MuthuSelvi",
  }
  return (
    <div>
      <Familys.Provider value={FullName}>
        <Family />
      </Familys.Provider>
    </div>
  )
}

export default App
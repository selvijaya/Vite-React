// import React from 'react'

function InputContainer({inputval,WriteToDo,AddToDo}) {
  return (
    <div className="input-container" >
    <input type="text" value={inputval} onChange={WriteToDo}/>
    <button onClick={AddToDo}>+</button>
  </div>
  )
}

export default InputContainer
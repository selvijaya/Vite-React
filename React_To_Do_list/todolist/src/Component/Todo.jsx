// import React from 'react'

function Todo({todo,deleteTodo,index}) {
  return (
    <div className='todolist'>
      <p>{todo}</p>
      <div className='actions'>
      <input type='checkbox'/>
      <button onClick={()=>deleteTodo(index)}>Delete</button>
      </div>
    </div>
  )
}

export default Todo
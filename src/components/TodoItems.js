import React from 'react'

export default function TodoItems (props) {
  let handleClick = () => {
    props.deleteTask(props.todo)
  }
  return (
    <div className='todo-list'>
      <div className='task'>
        <h3>{props.todo}</h3>
        <h3 className='cancel-btn' onClick={handleClick}>X</h3>
      </div>
    </div>
  )
}

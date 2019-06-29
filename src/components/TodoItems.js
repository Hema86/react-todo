import React from 'react'

export default function TodoItems (props) {
  return props.todos.map(todo => {
    return (
      <div className='todo-list'>
        <ul>
          <li>{todo}</li>
        </ul>
      </div>
    )
  })
}

import React, { Component } from 'react'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: ''
    }
  }

  addTodo = item =>{
    this.setState({
      todos: [...this.state.todos, item]
    })
  }
 deleteTask = (task) => {
   let todos = Object.assign([], this.state.todos)
   let index = todos.indexOf(task)
   todos.splice(index, 1)
   this.setState({
     todos
   })
 }
  render () {
    return (
      this.state.todos.length>0
      ? <div className='todo-container'>
         <h1 className='title'>Todos</h1> 
        <AddTodo addTodo={this.addTodo} />
        {this.state.todos.map(todo => {
          return <TodoItems todo={todo} deleteTask={this.deleteTask}/>
        })
        }
        </div>
      : <div className='todo-container'>
          <h1 className='title'>Todos</h1> 
          <AddTodo addTodo={this.addTodo} />
        </div>
       
    )
  }
  
}

export default App

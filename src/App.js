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
  render () {
    return (
      <div className='App'>
      {this.state.todos.length>0
      ? <div>
        <AddTodo addTodo={this.addTodo} />
        <TodoItems todos={this.state.todos}/>
        </div>
      : <AddTodo addTodo={this.addTodo} />
      }  
      </div>
    )
  }
}

export default App

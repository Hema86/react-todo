import React, { Component } from 'react'

export default class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      task: ''
    }
  }

  onChange = (event) =>{
      this.setState({
          task:event.target.value
      })
  }

  onSubmit = (event) =>{
      this.props.addTodo(this.state.task)
      event.preventDefault()
      this.setState({
        task:''
      })
  }
  render () {
    return (
      <div className='add-todo'>
        <form onSubmit={this.onSubmit}>
          <input type='text' className='input-field' onChange={this.onChange} value={this.state.task}/>
        </form>
      </div>

    )
  }
}

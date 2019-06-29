import React from 'react'

class TodoItems extends React.Component {
  constructor (props) {
    super(props)
    this.state ={
      isEditing:false,
      task:this.props.todo
    }
  }
  handleClick = () => {
    this.props.deleteTask(this.props.todo)
  }
  handleEditing = () => {
    this.setState({
      isEditing:true
    })
  }
  handleChange = (event) => {
    this.setState({
      task:event.target.value
    })
  }
  handleSubmit = (event) => {
    if(event.keyCode === 13) {
      this.setState({
        isEditing:false
      })
    }
  }
  render () {
  return (
    <div className='todo-list'>
      <div className='task'>
      {this.state.isEditing
      ? <div>
        <input type='text' value={this.state.task} onChange={this.handleChange} onKeyDown={this.handleSubmit} />
         <h3 className='cancel-btn' onClick={this.handleClick}>X</h3>
      </div>
       :<div>
         <h3 onClick={this.handleEditing}>{this.state.task}</h3>
         <h3 className='cancel-btn' onClick={this.handleClick}>X</h3>
         </div>
      }
        
      </div>
    </div>
  )
 }
}
export default TodoItems

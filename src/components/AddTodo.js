import React, { Component } from 'react'
import PropTypes from 'prop-types'
class AddTodo extends Component {
    static propTypes = {
        addOneTodo: PropTypes.func
      }
    constructor(props){
        super(props)
        this.state={todo:""}
    }
    handelChangeValue (e) {
     this.setState({todo:e.target.value})
    }
    handelClick(){
        this.setState({todo:""})
        this.props.addOneTodo(this.state.todo)
    }
    render () {
      return (
        <div>
        <input type="text" value={this.state.todo} onChange={this.handelChangeValue.bind(this)}></input>
          <button
            onClick={this.handelClick.bind(this)}>AddTodo</button>
        </div>
      )
    }
    }
    
  export default AddTodo
import { connect } from 'react-redux'

import { addTodo } from '../actions'
import AddTodo from "../components/AddTodo"
const mapDispatchToProps = (dispatch) => {
    return {
        addOneTodo: (text) => {
            dispatch(addTodo(text))
      }
    }
  }
export default connect("",mapDispatchToProps)(AddTodo)
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'

const AddTodo = (props) => {
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            let input = e.target.userInput.value
            props.dispatch(addTodo(input))
            console.log(input);
            e.target.userInput.value = ''
        }}>
            <input type='text' name='userInput'/>
            <button>送信</button>
        </form>
    )
}

export default connect()(AddTodo)

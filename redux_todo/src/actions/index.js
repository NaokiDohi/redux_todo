import todos from "../reducers/todos"

export const saveTodo = (text) => {
    // mongoが自動的にIDを振り分けてくれるので引数にIDは必要ない
    return dispatch => {
        // 構文的に return (dispatch) => { eでも可
        // installしたfetchライブラリを使用 https://github.com/github/fetch
        fetch('http://localhost:8080/api/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text //text: textと同じ意味
            })
        })
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => dispatch(recieveTodos(json)))
        .catch(err => console.log(err))
    }
}

// addTodoの代わりに上記の非同期処理を実装
// const ADD_TODO = "ADD_TODO"
// export const addTodo = (text) => ({
//     type: ADD_TODO,
//     text,
//     id: Math.random(),
// })

const RECIEVE_TODOS = 'RECIEVE_TODOS'
const recieveTodos = (todos) => ({
    type: RECIEVE_TODOS,
    todos
})

const DELETE_TODO = "DELETE_TODO"
export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id,
})

export const getTodos = () => {
    return dispatch => {
        fetch('http://localhost:8080/api/todos')
        .then(response => response.json())
        .then(todos => dispatch(recieveTodos(todos)))
        .catch(err => console.log(err))
    }
}
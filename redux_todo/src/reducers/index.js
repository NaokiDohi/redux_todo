import { combineReducers } from 'redux';
import todos from './todos'

const rootReducer = combineReducers({
    todos,// todos: todoと同じ意味の簡略記法
})
export default rootReducer
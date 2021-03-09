import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo'
import List from './components/List/List'
import { connect } from 'react-redux'
import { getTodos } from './actions'

class App extends Component {
  componentDidMount() {
    // console.log("Yes, I am called!!")
    this.props.dispatch(getTodos())
  }
  render() {
    return (
      <div className="App">
        <AddTodo />
        <List />
      </div>
    );
    }
}

export default connect()(App);

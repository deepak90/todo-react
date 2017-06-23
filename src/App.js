import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo/'
import {addTodo, toggleTodo, generateRandomId, findTodoById, updateTodo} from './lib/todoHelpers'

class App extends Component {
    state = {
      todos : [
        {id:1, name: "Learn JSX", isComplete: true},
        {id:2, name: "Build an Awesome app", isComplete: false},
        {id:3, name: "Write test cases", isComplete: false},
        {id:4, name: "ship it!", isComplete: false}
      ],
      currentTodo : '' 
    }


  handleInputChange = (e) => {
    this.setState(
      {
        currentTodo: e.target.value
      }
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const id = generateRandomId();
    var newTodos = addTodo(
      this.state.todos,
      {
        id: id,
        name: this.state.currentTodo,
        isComplete: false
      }
    );
    this.setState({
      todos: newTodos,
      submitError: ''
    })
  }

  handleSubmitError = (e) => {
    e.preventDefault();
    this.setState({
      submitError : "This Field is Required"
    }) 
  }


  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleSubmitError ;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="todo-container">
            {this.state.submitError}
            <TodoForm 
              handleInputChange={this.handleInputChange} 
              handleSubmit={submitHandler} 
              currentTodo={this.state.currentTodo}/>
            <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;

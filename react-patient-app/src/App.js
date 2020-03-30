
import logo from './logo.svg';
import './App.css';
import { API, graphqlOperation } from 'aws-amplify';
import React, { Component } from 'react'

const listTodos = `query listTodos {
  listTodos{
    items{
      id
      name
      description
    }
  }
}`;
const addTodo = `mutation createTodo($name:String! $description: String!) {
  createTodo(input:{
    name:$name
    description:$description
  }){
    id
    name
    description
  }
}`;

class App extends Component {
    todoMutation = async () => {
        const todoDetails = {
            name: "Party tonight!",
            description: "Amplify CLI rocks!"
        };
        const newTodo = await API.graphql(graphqlOperation(addTodo, todoDetails));
        alert(JSON.stringify(newTodo));
    };
    listQuery = async () => {
        console.log("listing todos");
        const allTodos = await API.graphql(graphqlOperation(listTodos));
        alert(JSON.stringify(allTodos));
    };


    render() {
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                      Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Learn React
                  </a>
              </header>
              <body>
              <h2>Medical Marijuana </h2>
              </body>
          </div>
      );
  }
}

export default App;

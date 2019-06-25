import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
// import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import axios from 'axios';

class App extends React.Component {

    state = {
        todos: [
            // {id: uuid.v4(), title: 'take out the trash', completed: false},
            // {id: uuid.v4(), title: 'dinner with wife', completed: false},
            // {id: uuid.v4(), title: 'meeting with boss', completed: false}
        ]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.setState({ todos: res.data }))
    }

    // toggle line on todo
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map( todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo;
        }) });
    }

    // delete todo
    delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then( res => this.setState({ todos: [...this.state.todos.filter( todo => todo.id !== id)]}));
    }

    // add todo
    addTodo = (title) => {
        // const newTodo = {
        //     id: uuid.v4(),
        //     title: title,
        //     completed: false
        // }
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: title,
            completed: false
        }).then( res => this.setState({ todos: [...this.state.todos, res.data]})
        );
    }

    render(){
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route exact path="/" render={ props => (
                            <React.Fragment>
                                <AddTodo addTodo={ this.addTodo }/>
                                <Todos todos={ this.state.todos } markComplete={ this.markComplete } delTodo={ this.delTodo }/>
                            </React.Fragment>
                        )}/>
                        <Route path="/about" component={ About } />
                    </div>
                </div>
            </Router>
        );
    }
    
}

export default App;

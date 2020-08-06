import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      userName: "Adam"
    }
  }

  changeStateData = () => {
    this.setState({
      userName: this.state.userName === "Adam" ? "Jakub" : "Adam"
    })
  }

  render(){
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          Lista zadań użytkownika {this.state.userName}
        </h4>
        <button className="btn btn-primary m-2"
                onClick={this.changeStateData}>          
          Zmień
        </button>
      </div>
    );
  }  
}

import React, { Component } from "react";
import "./HelloWorld.css";

class HelloWorld extends Component{
  render(){
    return(
      <div className="helloContainer">
        <h1>Witaj, świecie!</h1>
      </div>
    );
  }
}

export default HelloWorld;
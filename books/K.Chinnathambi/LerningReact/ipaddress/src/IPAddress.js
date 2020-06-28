import React, { Component } from "react";
import "./IPAddress.css";

class IPAddress extends Component{
  render(){
    return(
      <div>
        <h1>{this.props.ip}</h1>
        <p>(to jest twój adres ip.. chyba :p).</p>
      </div>
    );
  }
}

export default IPAddress;
import React, { Component } from "react";
import IPAddress from "./IPAddress.js";

let xhr;

class IPAddressContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      ip_address: "..."
    };
    this.processRequest = this.processRequest.bind(this);
  }

  componentDidMount(){
    xhr = new XMLHttpRequest();
    xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.ipify.org?format=json", true);
    xhr.send();
    console.log(xhr);

    xhr.addEventListener("readystatechange", this.processRequest, false);
  }

  processRequest(){
    if(xhr.readyState === 4 && xhr.status === 200){
      const response = JSON.parse(xhr.responseText);
      // console.log(response);

      this.setState({
        ip_address: response.ip
      });
    }
  }

  render(){
    return(
      <IPAddress ip={this.state.ip_address}/>
    );
  }
}

export default IPAddressContainer;
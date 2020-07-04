import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component{
  render(){

    console.log("wyśiwetlenie Menu");

    let visibility = "hide";
    if(this.props.menuVisibility){
      visibility = "show";
    }

    return(
      <div id="flyoutMenu"
            onMouseDown={this.props.handleMouseDown}
            className={visibility}
            >
      <h2><a href="#">Strona główna</a></h2>
      <h2><a href="#">O nas</a></h2>
      <h2><a href="#">Kontakt</a></h2>
      <h2><a href="#">Szukaj</a></h2>
      </div>
    );
  }
}

export default Menu;
import React, { PureComponent } from "react";
import "./MenuButton.css";

class MenuButton extends PureComponent{

  // shouldComponentUpdate(nextProps, nextState){
  //   if(nextProps.handleMouseDown === this.props.handleMouseDown){
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  render(){
    console.log("wyśiwetlenie MenuButton");
    return(
      <button id="roundButton"
              onMouseDown={this.props.handleMouseDown}></button>
    )
  }
}

export default MenuButton;
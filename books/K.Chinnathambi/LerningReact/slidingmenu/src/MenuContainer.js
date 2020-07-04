import React, { Component } from "react";
import MenuButton from "./ManuButton.js";
import Menu from "./Menu.js";

class MenuContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      visible: false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e){
    this.toggleMenu();
    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu(){
    this.setState({
      visible: !this.state.visible
    });
  }

  render(){
    console.log("wyśiwetlenie MenuContainer");
    return(
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown} />
        <Menu handleMouseDown={this.handleMouseDown}
              menuVisibility={this.state.visible}/>
        <div>
          <p>Który z poniższych elementów nie pasuje do pozostałych?</p>
          <ul>
            <li>Drzewo</li>
            <li>Trzcina</li>
            <li>Ryba</li>
            <li>Las</li>
            <li>Trawa</li>
            <li>Róża</li>
            <li>Pomidor</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MenuContainer;
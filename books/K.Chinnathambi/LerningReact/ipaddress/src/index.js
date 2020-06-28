import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import IPAddressContainers from "./IPAddressContainer";

const destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <IPAddressContainers/>
  </div>,
  destination
);
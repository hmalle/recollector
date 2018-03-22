import React from "react";
import "./Header.css";

const Title = props => 
  <div className="fixed-top bg-dark">
    <div className="container">
      <h1 className="float-left header">Total Recall</h1>
      <p className="float-right header">{props.children}</p>
    </div>
  </div>

export default Title;

import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="card" onClick={()=>props.playEvent(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>);

export default ImageCard;

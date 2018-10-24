import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.url} />
        </div>
        <button className="clicker" onClick={function(event){ props.shuffle(); props.clickTrack(props.id)}}> 
    Click Here
  </button>
    </div>
    
  );
export default ImageCard;
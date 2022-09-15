import React from "react";
import "./card.css";

function Card(props) {
    let {precio, titulo, img, detalles} = props;
    return (
        <div className="card">
            <div className="card-img">
                <img src={img} alt="card-img"></img>
            </div>
            <div className="card-detail">
                <h3>{titulo}</h3>
                <p>{detalles}</p>
                <h4>$ {precio}</h4>
            </div>

        </div>
    )
}

export default Card;
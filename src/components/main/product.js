import React from "react";
import './product.css'

const Product = ({ image, missionName, flightNumber, missionId, launchYear, successYear }) => {
    return (
        <div className="product">
            <div className="img_container">
                <img src={image} />
                <u>{missionName}: #{flightNumber}</u>
            </div>
            <div className="descriptions">
                <div className="m_id">
                    <h5>Mission ids: </h5>
                    <li><span className="textcolor">{missionId} </span></li>
                </div>

                <h5>Launch Year: <span className="textcolor">{launchYear}</span></h5>
                <h5>Successfull Launch: <span className="textcolor"> {successYear ? "true" : "false"} </span></h5>
                <h5>Successfull Landing: <span className="textcolor"> {successYear}</span></h5>
            </div>
        </div>
    )
}

export default Product;
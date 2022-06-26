import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-6 col-lg-4 col-sm-12 col-12 gy-4">
        <div className="card">
          <img className="card-img-top" src={props.img} alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="/" className="btn  btn-outline-primary">
              Check Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;

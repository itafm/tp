import React, { Component } from "react";

export const Film = (props) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={props.image} className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title text-danger text-center ">{props.title}</h2>
          <p className="card-text fs-4 ">{props.description}</p>
          <p className="card-text fs-4">Duration: {props.duration}</p>
          <p className="card-text fs-4">Price : {props.price}</p>
          <a href="#" className="btn btn-danger ms-5 px-4">
            Voir Film
          </a>  
        </div>
      </div>
    </div>
  );
};

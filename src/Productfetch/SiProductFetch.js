// import { useState } from "react";
import { Link } from "react-router-dom";
const SiProductFetch = (props) => {
  return (
    //     <div className="">
    //       <img src={props.prod.image} alt="erroorr"/>
    //       <h3>{props.prod.title}</h3>
    //       <p>{props.prod.description}</p>
    //       <h4>Price: {props.prod.price}</h4>
    // </div>

    <div className="card  ">
      <img src={props.prod.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.prod.title}</h5>
        <p className="card-text">{props.prod.description}</p>
        <p> Price: {props.prod.price}</p>

        {props.showButton ? (
          <Link to={`/product/${props.prod.id}`} className="btn btn-primary">
            Details
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SiProductFetch;

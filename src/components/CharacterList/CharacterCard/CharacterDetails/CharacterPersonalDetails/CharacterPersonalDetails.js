import React from "react";
import classes from "./CharacterPersonalDetails.module.scss";

const characterPersonalDetails = props => {
  const { id, name, status, species, gender } = props;
  return (
    <div className={classes.Body + " card-body"}>
      <h4 className="card-title text-truncate">{name}</h4>
      <h6
        className={`card-subtitle text-uppercase ${
          status === "Alive"
            ? "text-success"
            : `${status === "Dead" ? "text-danger" : "text-secondary"}`
        }`}
      >{`${status} - ${species}`}</h6>
      <p className="card-text text-info">Id: {id}</p>
      <p className="card-text text-info">{gender}</p>
    </div>
  );
};

export default characterPersonalDetails;

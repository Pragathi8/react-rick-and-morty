import React from "react";
import classes from "./CharacterHistoryDetails.module.scss";

const characterHistoryDetails = props => {
  const { origin, location, created } = props;
  return (
    <div className={classes.Body + " card-body position-relative"}>
      {origin && (
        <div className="mb-2">
          <h6 className="mb-0">First seen:</h6>
          <p className="text-warning text-uppercase small mb-2">
            {origin.name}
          </p>
        </div>
      )}
      {location && (
        <div className="mb-2">
          <h6 className="mb-0">Last location:</h6>
          <p className="text-primary text-uppercase small mb-2">
            {location.name}
          </p>
        </div>
      )}
      {created && (
        <div className="mb-2">
          <h6 className="mb-0">Created:</h6>
          <p className="text-muted text-uppercase small mb-2">
            {new Date().getFullYear() - created.slice(0, 4)} years ago
          </p>
        </div>
      )}
    </div>
  );
};

export default characterHistoryDetails;

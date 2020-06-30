import React from "react";

const characterHistoryDetails = props => {
  const { origin, location } = props;
  return (
    <div className="card-body position-relative">
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
          <p className="text-muted text-uppercase small mb-2">
            {location.name}
          </p>
        </div>
      )}
      <button
        type="button"
        className="btn btn-info btn-lg position-absolute rounded-circle"
        style={{
          bottom: "16px",
          right: "16px",
          fontSize: "20px",
          fontWeight: "bold"
        }}
        // onClick={() => addItemToCart(character)}
      >
        +
      </button>
    </div>
  );
};

export default characterHistoryDetails;

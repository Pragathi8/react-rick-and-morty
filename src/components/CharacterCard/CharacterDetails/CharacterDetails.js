import React from "react";
import CharacterImage from "./CharacterImage/CharacterImage";
import CharacterPersonalDetails from "../CharacterDetails/CharacterPersonalDetails/CharacterPersonalDetails";
import CharacterHistoryDetails from "../CharacterDetails/CharacterHistoryDetails/CharacterHistoryDetails";

const characterDetails = props => {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    location,
    image,
    created
  } = props.character;
  return (
    <div className="card bg-dark text-light">
      <CharacterImage image={image} />
      <CharacterPersonalDetails
        id={id}
        name={name}
        status={status}
        species={species}
        gender={gender}
      />
      <CharacterHistoryDetails
        origin={origin}
        location={location}
        created={created}
      />
    </div>
  );
};

export default characterDetails;

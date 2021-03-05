import React, { useEffect } from "react";
import CharacterCard from "../CharacterList/CharacterCard/CharacterCard";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Spinner from "../../UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/WithErrorHandler/withErrorHandler";
import axios from "../../axios-orders";
import Filters from "../Filters/Filters";

const CharacterList = (props) => {
  const { onFetchCharacters } = props;

  useEffect(() => {
    onFetchCharacters();
  }, [onFetchCharacters]);

  let characters = <Spinner />;
  if (!props.loading) {
    characters = props.characters.map(character => (
      <div
        className="col-lg-3 col-md-4 col-sm-6 col-6 p-2"
        key={character.id}
      >
        <CharacterCard character={character} />
      </div>
    ));
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-2">
          <Filters />
        </div>
        <div className="col-lg-10">
          <div className="row">{characters}</div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    characters: state.characters,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCharacters: () => dispatch(actions.fetchCharacters())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(CharacterList, axios));

import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import withErrorHandler from "../../hoc/WithErrorHandler/withErrorHandler";
import axios from "../../axios-orders";

const Search = props => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleOnChange = event => {
    setSearchTerm(event.target.value);
  };

  const search = (value) => {
    props.onSearch(value);
  }

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleOnChange}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={() => search(searchTerm)}
        >
          Search
          </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch: value => dispatch(actions.seacrhCharacters(value))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withErrorHandler(Search, axios));

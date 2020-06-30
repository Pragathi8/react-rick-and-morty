import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import withErrorHandler from "../../hoc/WithErrorHandler/withErrorHandler";
import axios from "../../axios-orders";

class Search extends Component {
  state = {
    searchTerm: ""
  };

  handleOnChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  search(value) {
    this.props.onSearch(value);
  }

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={this.state.searchTerm}
          onChange={this.handleOnChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={() => this.search(this.state.searchTerm)}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
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

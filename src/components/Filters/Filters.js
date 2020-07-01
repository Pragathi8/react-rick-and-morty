import React, { Component } from "react";
import Filter from "./Filter/Filter";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Filters extends Component {
  state = {
    appliedFilters: {
      species: [],
      gender: [],
      type: [],
      status: []
    }
  };

  handleFilter = (category, value, checked) => {
    let filters = { ...this.state.appliedFilters };
    if (checked) {
      filters[category].push(value);
    } else {
      filters[category].pop(value);
    }
    this.setState({ appliedFilters: filters });
    this.props.onSelectingFilters(this.state.appliedFilters);
  };

  render() {
    return (
      <div>
        <h2>Filter by</h2>
        <Filter
          category="species"
          values={this.props.species}
          handleFilter={this.handleFilter}
        />
        <Filter
          category="gender"
          values={this.props.genders}
          handleFilter={this.handleFilter}
        />
        <Filter
          category="status"
          values={this.props.status}
          handleFilter={this.handleFilter}
        />
        <Filter
          category="type"
          values={this.props.types}
          handleFilter={this.handleFilter}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    species: state.species,
    genders: state.genders,
    types: state.types,
    status: state.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectingFilters: filters => dispatch(actions.applyFilter(filters))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

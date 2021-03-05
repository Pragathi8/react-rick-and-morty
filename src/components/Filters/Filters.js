import React, { useState } from "react";
import Filter from "./Filter/Filter";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const Filters = props => {
  const [appliedFilters, setAppliedFilters] = useState({ species: [], gender: [], type: [], status: [] })

  const handleFilter = (category, value, checked) => {
    let filters = { ...appliedFilters };
    if (checked) {
      filters[category].push(value);
    } else {
      filters[category].pop(value);
    }
    setAppliedFilters(filters);
    props.onSelectingFilters(appliedFilters);
  };

  return (
    <div>
      <h2>Filter by</h2>
      <Filter
        category="species"
        values={props.species}
        handleFilter={handleFilter}
      />
      <Filter
        category="gender"
        values={props.genders}
        handleFilter={handleFilter}
      />
      <Filter
        category="status"
        values={props.status}
        handleFilter={handleFilter}
      />
      <Filter
        category="type"
        values={props.types}
        handleFilter={handleFilter}
      />
    </div>
  );
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

import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const sortDropdown = props => {
  const handleChange = event => {
    props.onDropdownChange(event);
  };

  return (
    <DropdownButton title="Sort By ID" onSelect={event => handleChange(event)}>
      <Dropdown.Item eventKey="ascending">Ascending</Dropdown.Item>
      <Dropdown.Item eventKey="descending">Descending</Dropdown.Item>
    </DropdownButton>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onDropdownChange: value => dispatch(actions.dropdownChange(value))
  };
};

export default connect(null, mapDispatchToProps)(sortDropdown);

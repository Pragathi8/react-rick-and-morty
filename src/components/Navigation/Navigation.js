import React from "react";
import Search from "../Search/Search";
import classes from "./Navigation.module.scss";
import SortDropdown from "../SortDropdown/SortDropdown";

const navigation = () => {
  return (
    <div className="row sticky-top bg-light d-flex align-items-center">
      <div className="col-lg-6 col-md-4 col-sm-12">
        <h1>Ricky Morty</h1>
      </div>
      <div
        className={
          classes.Navigation +
          " col-lg-3 col-md-4 col-sm-6 d-flex justify-content-end"
        }
      >
        <Search />
      </div>
      <div
        className={
          classes.Navigation +
          " col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center"
        }
      >
        <SortDropdown />
      </div>
    </div>
  );
};

export default navigation;

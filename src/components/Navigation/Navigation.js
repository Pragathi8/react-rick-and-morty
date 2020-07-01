import React from "react";
import Search from "../Search/Search";
import classes from "./Navigation.module.scss";
import SortDropdown from "../SortDropdown/SortDropdown";

const navigation = () => {
  return (
    <div
      className={
        classes.Navigation + " row sticky-top d-flex align-items-center"
      }
    >
      <div className="col-lg-6 col-md-4 col-sm-12 col-12">
        <h1 className={classes.Title}>Ricky Morty</h1>
      </div>
      <div
        className={
          classes.Search +
          " col-lg-3 col-md-4 col-sm-6 col-7 d-flex justify-content-end"
        }
      >
        <Search />
      </div>
      <div
        className={
          classes.Navigation +
          " col-lg-3 col-md-4 col-sm-6 col-5 d-flex justify-content-end"
        }
      >
        <SortDropdown />
      </div>
    </div>
  );
};

export default navigation;

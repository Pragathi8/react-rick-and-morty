import * as actionTypes from "./actionTypes";

export const fetchCharactersStart = () => {
  return {
    type: actionTypes.FETCH_CHARACTERS_START
  };
};

export const fetchCharactersSuccess = characters => {
  return {
    type: actionTypes.FETCH_CHARACTERS_SUCCESS,
    characters
  };
};

export const fetchCharactersFail = error => {
  return {
    type: actionTypes.FETCH_CHARACTERS_FAIL,
    error
  };
};

export const fetchCharacters = () => {
  return {
    type: actionTypes.FETCH_CHARACTERS_INITIATE
  }
};

export const seacrhCharactersStart = searchTerm => {
  return {
    type: actionTypes.SEARCH_CHARACTERS_START,
    searchTerm
  };
};

export const seacrhCharactersSuccess = characters => {
  return {
    type: actionTypes.SEARCH_CHARACTER_SUCCESS,
    characters
  };
};

export const seacrhCharactersFail = error => {
  return {
    type: actionTypes.SEARCH_CHARACTER_FAIL,
    error
  };
};

export const seacrhCharacters = value => {
  return {
    type: actionTypes.SEARCH_CHARACTERS_INITIATE,
    value
  }
};

export const dropdownChange = value => {
  return {
    type: actionTypes.DROPDOWN_CHANGE,
    value
  };
};

export const extractSpecies = () => {
  return {
    type: actionTypes.EXTRACT_SPECIES
  };
};

export const extractGenders = () => {
  return {
    type: actionTypes.EXTRACT_GENDERS
  };
};

export const extractTypes = () => {
  return {
    type: actionTypes.EXTRACT_TYPES
  };
};

export const extractStatus = () => {
  return {
    type: actionTypes.EXTRACT_STATUS
  };
};

export const applyFilterStart = () => {
  return {
    type: actionTypes.APPLY_FILTERS_START
  };
};

export const applyFilterSuccess = characters => {
  return {
    type: actionTypes.APPLY_FILTERS_SUCCESS,
    characters
  };
};

export const applyFilterFail = error => {
  return {
    type: actionTypes.APPLY_FILTERS_FAIL,
    error
  };
};

export const applyFilter = filters => {
  return {
    type: actionTypes.APPLY_FILTERS_INITIATE,
    filters
  }
};

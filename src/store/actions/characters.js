import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

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
  return dispatch => {
    dispatch(fetchCharactersStart());
    axios
      .get("/character")
      .then(res => {
        dispatch(fetchCharactersSuccess(res.data.results));
        dispatch(extractSpecies());
        dispatch(extractGenders());
        dispatch(extractTypes());
        dispatch(extractStatus());
      })
      .catch(error => {
        dispatch(fetchCharactersFail(error));
      });
  };
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
  return dispatch => {
    dispatch(seacrhCharactersStart(value));
    axios
      .get(`/character/?name=${value}`)
      .then(res => {
        dispatch(seacrhCharactersSuccess(res.data.results));
      })
      .catch(error => {
        dispatch(seacrhCharactersFail(error));
      });
  };
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
  return dispatch => {
    dispatch(applyFilterStart());
    const searchParams = new URLSearchParams();
    for (const key of Object.keys(filters)) {
      const param = filters[key];
      if (Array.isArray(param)) {
        for (const p of param) {
          searchParams.append(key, p);
        }
      } else {
        searchParams.append(key, param);
      }
    }
    axios
      .get("/character/", {
        params: searchParams
      })
      .then(res => {
        dispatch(applyFilterSuccess(res.data.results));
      })
      .catch(error => {
        dispatch(applyFilterFail(error));
      });
  };
};

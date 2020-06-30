import * as actionTypes from "../actions/actionTypes";

const initialState = {
  characters: [],
  loading: false,
  searchTerm: "",
  species: [],
  genders: [],
  types: [],
  status: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHARACTERS_START: {
      return {
        ...state,
        loading: true
      };
    }
    case actionTypes.FETCH_CHARACTERS_SUCCESS: {
      return {
        ...state,
        characters: state.characters.concat(action.characters),
        loading: false
      };
    }
    case actionTypes.FETCH_CHARACTERS_FAIL: {
      return {
        ...state,
        loading: false
      };
    }
    case actionTypes.SEARCH_CHARACTERS_START: {
      return {
        ...state,
        loading: true,
        searchTerm: action.searchTerm
      };
    }
    case actionTypes.SEARCH_CHARACTER_SUCCESS: {
      return {
        ...state,
        characters: action.characters,
        loading: false
      };
    }
    case actionTypes.SEARCH_CHARACTER_FAIL: {
      return {
        ...state,
        characters: [],
        loading: false
      };
    }
    case actionTypes.DROPDOWN_CHANGE: {
      let updatedCharacters = [];
      if (action.value === "ascending") {
        updatedCharacters = [...state.characters].sort((a, b) => a.id - b.id);
      } else if ((action.value = "descending")) {
        updatedCharacters = [...state.characters].sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        characters: updatedCharacters
      };
    }
    case actionTypes.EXTRACT_SPECIES: {
      const speciesArr = state.characters.map(char => char.species);
      const updatedSpecies = speciesArr.filter(
        (item, index) => speciesArr.indexOf(item) >= index
      );
      return {
        ...state,
        species: updatedSpecies
      };
    }
    case actionTypes.EXTRACT_GENDERS: {
      const gendersArr = state.characters.map(char => char.gender);
      const updatedGenders = gendersArr.filter(
        (item, index) => gendersArr.indexOf(item) >= index
      );
      return {
        ...state,
        genders: updatedGenders
      };
    }
    case actionTypes.EXTRACT_TYPES: {
      const typesArr = state.characters.map(char => char.type);
      const updatedTypes = typesArr.filter(
        (item, index) => typesArr.indexOf(item) >= index
      );
      return {
        ...state,
        types: updatedTypes
      };
    }
    case actionTypes.EXTRACT_STATUS: {
      const statusArr = state.characters.map(char => char.status);
      const updatedStatus = statusArr.filter(
        (item, index) => statusArr.indexOf(item) >= index
      );
      return {
        ...state,
        status: updatedStatus
      };
    }
    case actionTypes.APPLY_FILTERS_START: {
      return {
        ...state,
        loading: true
      };
    }
    case actionTypes.APPLY_FILTERS_SUCCESS: {
      return {
        ...state,
        characters: action.characters,
        loading: false
      };
    }
    case actionTypes.APPLY_FILTERS_FAIL: {
      return {
        ...state,
        characters: [],
        loading: false
      };
    }
    default:
      return state;
  }
};

export default reducer;

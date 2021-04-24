import {GET_CATEGORIES_FAILURE, GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS} from "../actions/categoriesActions";

const initialState = {
  categories: [],
  categoriesLoading: false,
  categoriesError: null
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return {...state, categoriesLoading: true};
    case GET_CATEGORIES_SUCCESS:
      return {...state, categoriesLoading: false, categories: action.categories};
    case GET_CATEGORIES_FAILURE:
      return {...state, categoriesLoading: false, categoriesError: action.error};
    default: return state;
  }
}

export default categoriesReducer;
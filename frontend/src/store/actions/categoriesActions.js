import axiosApi from "../../axiosApi";

export const GET_CATEGORIES_REQUEST = 'GET_CATEGORIES_REQUEST';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';

const getCategoriesRequest = () => ({type: GET_CATEGORIES_REQUEST});
const getCategoriesSuccess = categories => ({type: GET_CATEGORIES_SUCCESS, categories});
const getCategoriesFailure = error => ({type: GET_CATEGORIES_FAILURE, error});

export const fetchCategories = () => {
  return async dispatch => {
    try {
      dispatch(getCategoriesRequest());
      const response = await axiosApi.get('/categories');
      dispatch(getCategoriesSuccess(response.data));
    } catch (e) {
      dispatch(getCategoriesFailure(e));
    }
  }
}


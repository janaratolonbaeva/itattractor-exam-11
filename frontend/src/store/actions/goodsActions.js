import axiosApi from "../../axiosApi";
import {historyPush} from "./historyActions";

export const GET_GOODS_REQUEST = 'GET_GOODS_REQUEST';
export const GET_GOODS_SUCCESS = 'GET_GOODS_SUCCESS';
export const GET_GOODS_FAILURE = 'GET_GOODS_FAILURE';
export const POST_GOODS_REQUEST = 'POST_GOODS_REQUEST';
export const POST_GOODS_SUCCESS = 'POST_GOODS_SUCCESS';
export const POST_GOODS_FAILURE = 'POST_GOODS_FAILURE';
export const GET_ONE_PRODUCT_SUCCESS = 'GET_ONE_PRODUCT_SUCCESS';

const getGoodsRequest = () => ({type: GET_GOODS_REQUEST});
const getGoodsSuccess = goods => ({type: GET_GOODS_SUCCESS, goods});
const getGoodsFailure = error => ({type: GET_GOODS_FAILURE, error});
const postGoodsRequest = () => ({type: POST_GOODS_REQUEST});
const postGoodsSuccess = () => ({type: POST_GOODS_SUCCESS});
const postGoodsFailure = error => ({type: POST_GOODS_FAILURE, error});
const getOneProductSuccess = goods => ({type: GET_ONE_PRODUCT_SUCCESS, goods});

export const fetchGoods = () => {
  return async dispatch => {
    try {
      dispatch(getGoodsRequest());
      const response = await axiosApi.get('/goods');
      dispatch(getGoodsSuccess(response.data));
    } catch (e) {
      dispatch(getGoodsFailure(e));
    }
  }
};

export const fetchGoodsByCategories = (id) => {
  return async dispatch => {
    try {
      dispatch(getGoodsRequest());
      const response = await axiosApi.get('/goods/category/' + id);
      dispatch(getGoodsSuccess(response.data));
    } catch (e) {
      dispatch(getGoodsFailure(e));
    }
  }
};

export const postGoods = postData => {
  return async (dispatch, getState) => {
    try {
      dispatch(postGoodsRequest());
      const token = getState().users.user.token;
      const headers = {'Authorization': token}
      await axiosApi.post('/goods', postData, {headers});
      dispatch(postGoodsSuccess());
      dispatch(historyPush('/'));
    } catch (e) {
      dispatch(postGoodsFailure(e));
    }
  };
};

export const fetchOneGoods = (id) => {
  return async dispatch => {
    try {
      const response = await axiosApi.get('/goods/' + id);
      dispatch(getOneProductSuccess(response.data));
    } catch (e) {
      console.log(e)
    }
  }
};





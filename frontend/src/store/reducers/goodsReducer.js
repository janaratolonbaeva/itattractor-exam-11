import {
  GET_GOODS_FAILURE,
  GET_GOODS_REQUEST,
  GET_GOODS_SUCCESS, GET_ONE_PRODUCT_SUCCESS, POST_GOODS_FAILURE,
  POST_GOODS_REQUEST,
  POST_GOODS_SUCCESS
} from "../actions/goodsActions";

const initialState = {
  goods: null,
  goodsLoading: false,
  goodsError: null,
  oneProduct: null
};

const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS_REQUEST:
      return {...state, goodsLoading: true};
    case GET_GOODS_SUCCESS:
      return {...state, goodsLoading: false, goods: action.goods};
    case GET_GOODS_FAILURE:
      return {...state, goodsLoading: false, goodsError: action.error};
    case POST_GOODS_REQUEST:
      return {...state, goodsLoading: true};
    case POST_GOODS_SUCCESS:
      return {...state, goodsLoading: false};
    case POST_GOODS_FAILURE:
      return {...state, goodsLoading: false, goodsError: action.error};
    case GET_ONE_PRODUCT_SUCCESS:
      return {...state, oneProduct: action.goods};
    default:
      return state;
  }
}

export default goodsReducer;
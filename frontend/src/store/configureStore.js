import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {loadFromToLocalStorage, saveToLocalStorage} from "./localStorage";
import usersReducer from "./reducers/usersReducer";
import goodsReducer from "./reducers/goodsReducer";
import categoriesReducer from "./reducers/categoriesReducer";

const rootReducer = combineReducers({
  goods: goodsReducer,
  categories: categoriesReducer,
  users: usersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadFromToLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

store.subscribe(() => {
  saveToLocalStorage({
    users: store.getState().users
  })
});

export default store;
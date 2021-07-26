// import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import gamesReducer from "./games";
import { watcherSaga } from "./sagas";

const reducer = combineReducers({
	games: gamesReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

// const store = configureStore({
// 	reducer: { games: gamesReducer },
// });

export default store;

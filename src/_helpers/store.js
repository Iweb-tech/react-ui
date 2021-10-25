import { applyMiddleware, createStore } from "redux";
import ThunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../_reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger();

export const store = createStore(rootReducer, composeWithDevTools(
	applyMiddleware(
		ThunkMiddleware,
		loggerMiddleware
	)
));


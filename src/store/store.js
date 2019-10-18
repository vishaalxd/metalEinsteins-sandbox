import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import _ from "lodash";
import { Map } from "immutable";
import { combineReducers } from "redux-immutable";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  connectRouter,
  routerMiddleware
} from "connected-react-router/immutable";
import monitorReducersEnhancer from "../store/enhancers/monitorReducer";
import history from "../history";
import rootRunner from "./saga/rootSaga";
import loggerMiddleware from "./middlewares/logger";
import globalReducer from "./reducers/globalReducer";

export default function configureStore(state) {
  //saga-middleWarre
  const sagaMiddleware = createSagaMiddleware({
    onError: error => {
      console.log("Saga Failed");
    }
  });

  //RouterHistory
  const routeMiddleware = routerMiddleware(history);

  const middlewares = [loggerMiddleware, routeMiddleware, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];

  const composedEnhancers = () => {
    if (process.env.NODE_ENV === "development")
      return composeWithDevTools(...enhancers);
    return compose(...enhancers);
  };

  //Store
  const store = createStore(
    combineReducers({ router: connectRouter(history) }),
    state,
    composedEnhancers()
  );

  //initiate saga
  sagaMiddleware.run(rootRunner);

  return store;
}

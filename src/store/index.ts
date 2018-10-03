import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import dialogReducer from "./dialog/reducer";
import { IDialog } from "./dialog/types";
import postReducer from "./post/reducer";
import { IPost } from "./post/types";

export interface IStore {
  post: IPost;
  dialog: IDialog;
}

const reducer = combineReducers({
  dialog: dialogReducer,
  post: postReducer
});

declare global {
  /* tslint:disable */
  interface Window {
    devToolsExtension: any;
  }
  /* tslint:enable */
}

const configureStore = () => {
  return createStore(
    reducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : (f: any) => f
    )
  );
};

export default configureStore;

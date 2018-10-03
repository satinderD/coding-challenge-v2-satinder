import axios from "axios";
import { Dispatch } from "redux";
import { IPost } from "./types";

export const getPosts = () => {
  return (dispatch: Dispatch) => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        dispatch({
          payload: {
            body: error.message,
            name: "Whoops! There was an Error!"
          },
          type: "ADD_DIALOG"
        });
      });
  };
};

export const setPost = (post: IPost) => {
  return {
    payload: post,
    type: "SET_POST"
  };
};

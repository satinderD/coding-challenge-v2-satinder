import { IPostAction } from "./types";

const reducer = (state = {}, action: IPostAction) => {
  switch (action.type) {
    case "SET_POST":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

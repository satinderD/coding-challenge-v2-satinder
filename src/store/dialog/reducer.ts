import { IDialogAction } from "./types";

const reducer = (state = {}, action: IDialogAction) => {
  switch (action.type) {
    case "ADD_DIALOG":
      return action.payload;
    case "REMOVE_DIALOG":
      return (state = {});
    default:
      return state;
  }
};

export default reducer;

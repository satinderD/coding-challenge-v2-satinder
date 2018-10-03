import { IDialog } from "./types";

export const addDialog = (dialog: IDialog) => {
  return {
    payload: dialog,
    type: "ADD_DIALOG"
  };
};

export const removeDialog = () => {
  return {
    type: "REMOVE_DIALOG"
  };
};

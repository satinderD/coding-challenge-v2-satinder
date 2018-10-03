export interface IDialog {
  name: string;
  body: string;
}

export interface IDialogAction {
  payload: IDialog;
  type: string;
}

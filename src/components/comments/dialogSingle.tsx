import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import * as React from "react";
import { IDialog } from "../../store/dialog/types";

interface IProps {
  dialog: IDialog;
  removeDialog(): any;
}

const DialogSingle = (props: IProps) => {
  return (
    <Dialog open={Boolean(props.dialog.name)} onClose={props.removeDialog}>
      <DialogTitle style={{ textTransform: "capitalize" }}>
        {props.dialog.name}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{props.dialog.body}</DialogContentText>
      </DialogContent>
      <Button color="primary" onClick={props.removeDialog}>
        Close
      </Button>
    </Dialog>
  );
};

export default DialogSingle;

import { Grid, Typography } from "@material-ui/core";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Appbar from "../appbar";

interface IProps extends RouteComponentProps<any> {}

class Error extends React.Component<IProps> {
  public onClick = () => {
    this.props.history.push("/");
  };

  public render() {
    return (
      <React.Fragment>
        <Appbar />
        <Grid container={true} justify="center" spacing={24}>
          <Grid item={true} xs={6} style={{ textAlign: "center" }}>
            <Typography variant="display3">404 Error!</Typography>
            <Typography variant="headline">
              Please Check Url to make sure it is correct. Or click here or the
              logo to go back to the home page.
            </Typography>
            <Typography onClick={this.onClick} color="error" variant="headline">
              Here
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withRouter(Error);

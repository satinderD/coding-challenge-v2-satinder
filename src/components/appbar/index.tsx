import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";

interface IProps extends RouteComponentProps<any> {}

class Header extends React.Component<IProps> {
  public onClick = () => {
    this.props.history.push("/");
    location.reload();
  };

  public render() {
    return (
      <AppBar position="static" style={{ paddingTop: 10, paddingBottom: 10 }}>
        <Toolbar>
          <Grid container={true} justify="center" spacing={24}>
            <Grid item={true} xs={9}>
              <Typography
                variant="title"
                onClick={this.onClick}
                color="inherit"
              >
                Developer Test
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(Header);

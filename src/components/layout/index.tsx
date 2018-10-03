import { Grid } from "@material-ui/core";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import CommentList from "../../containers/commentList";
import PostList from "../../containers/postList";
import PostSingle from "../../containers/postSingle";
import Appbar from "../appbar";

interface IProps extends RouteComponentProps<any> {}

const layout = (props: IProps) => {
  return (
    <React.Fragment>
      <Appbar />
      <div style={{ padding: 12 }}>
        <Grid container={true} justify="center" spacing={24}>
          <Grid item={true} xs={6}>
            <PostSingle />
            <CommentList />
          </Grid>
          <Grid item={true} xs={3}>
            <PostList />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default withRouter(layout);

import { Paper, Typography } from "@material-ui/core";
import * as React from "react";
import { IPost } from "../../store/post/types";

interface IProps {
  post: IPost;
}

const PostSingle = (props: IProps) => {
  return (
    <React.Fragment>
      <Paper style={{ padding: 10, marginTop: 20, marginBottom: 20 }}>
        <Typography variant="display2" style={{ textTransform: "capitalize" }}>
          {props.post.title}
        </Typography>
        <Typography paragraph={true}>{props.post.body}</Typography>
      </Paper>
    </React.Fragment>
  );
};

export default PostSingle;

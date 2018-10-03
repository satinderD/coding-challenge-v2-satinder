import { Avatar, Button, Card, CardContent, CardHeader, Divider, Paper, Typography } from "@material-ui/core";
import axios from "axios";
import * as React from "react";
import DialogSingle from "../../containers/dialogSingle";
import { IDialog, IDialogAction } from '../../store/dialog/types';
import { IComment, IPost } from "../../store/post/types";

interface IProps {
  post: IPost;
  addDialog(dialog: IDialog): IDialogAction;
}

interface IState {
  comments: IComment[];
}

class CommentList extends React.Component<IProps, IState> {
  public state = {
    comments: []
  };

  public onClick = (dialog: IDialog) => (event: React.MouseEvent) => {
    this.props.addDialog(dialog);
  };

  public componentDidUpdate(oldProps: IProps) {
    if (oldProps.post === this.props.post) {
      return;
    }

    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.post.id}`)
      .then(response => {
        this.setState({
          comments: response.data
        });
      })
      .catch(error => {
        const errorMessage = {
          body: error.message,
          name: "Error"
        }
        this.props.addDialog(errorMessage);
      });
  }

  public render() {
    return (
      <React.Fragment>
        <Paper style={{padding: 10}}>
          <Typography variant="title" gutterBottom={true}>
            Comments
          </Typography>
          {this.state.comments.map((comment: IComment, index) => {
            return (
              <Card key={index} style={{ boxShadow: "none" }}>
                <CardHeader
                  style={{ textTransform: "capitalize" }}
                  avatar={<Avatar>{comment.name.charAt(0)}</Avatar>}
                  title={comment.name}
                  subheader={comment.email}
                />
                <CardContent>
                  <Typography style={{ textTransform: "capitalize" }}>
                    {comment.body}
                  </Typography>
                </CardContent>
                <Button color="secondary" onClick={this.onClick(comment)}>Open</Button>
                <Divider />
              </Card>
            );
          })}
          <DialogSingle/>
        </Paper>
      </React.Fragment>
    );
  }
}

export default CommentList;

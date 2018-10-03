import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { IPost, IPostAction } from "../../store/post/types";

interface IProps extends RouteComponentProps {
  posts: IPost[];
  setPost(post: IPost): IPostAction;
}

interface IState {
  page: number;
  rowsPerPage: number;
}

class PostList extends React.Component<IProps, IState> {
  public state = {
    page: 0,
    rowsPerPage: 25
  };

  public next = () => {
    const page = this.state.page + 1;
    this.setState({ page });
  };

  public back = () => {
    const page = this.state.page - 1;
    this.setState({ page });
  };

  public clickPost = (post: IPost) => (event: React.MouseEvent) => {
    this.props.setPost(post);
    this.props.history.push(`/post/${post.id}`);
  };

  public render() {
    const { page, rowsPerPage } = this.state;
    const lastPage = this.props.posts.length / rowsPerPage - 1;

    return (
      <React.Fragment>
        {this.props.posts
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((post, index) => {
            return (
              <List key={index} style={{ padding: 0 }}>
                <ListItem
                  button={true}
                  divider={true}
                  onClick={this.clickPost(post)}
                  style={{ textTransform: "capitalize" }}
                >
                  <ListItemText>{post.title}</ListItemText>
                </ListItem>
              </List>
            );
          })}

        <Button color="secondary" onClick={this.back} disabled={page === 0}>
          Back
        </Button>
        <Button
          color="primary"
          onClick={this.next}
          disabled={page === lastPage}
        >
          Next
        </Button>
      </React.Fragment>
    );
  }
}

export default withRouter(PostList);

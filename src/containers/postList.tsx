import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { bindActionCreators, Dispatch } from "redux";
import PostListView from "../components/posts/postList";
import { getPosts, setPost } from "../store/post/actions";
import { IPost, IPostAction } from "../store/post/types";

interface IProps extends RouteComponentProps<any> {
  getPosts(): any;
  setPost(post: IPost): IPostAction;
}

interface IState {
  posts: IPost[]
}

class PostList extends React.Component<IProps> {
  public state: IState = {
    posts: []
  };

  public componentDidMount() {
    this.props.getPosts().then((response: IPost[]) => {
      if (!response) {
        return;
      }

      this.setState({
        posts: response
      });

      if (this.props.match.params.id) {
        const urlId = response.filter(post => {
          return Number(this.props.match.params.id) === post.id;
        });
        this.props.setPost(urlId[0]);
        return;
      }
      this.props.setPost(response[0]);
    });
  }

  public componentDidUpdate(prevProps: IProps) {
    if (!this.props.match.params.id && prevProps.match.params.id !== this.props.match.params.id) {
      this.props.setPost(this.state.posts[0]);
    }
  }

  public render() {
    return (
      <PostListView posts={this.state.posts} setPost={this.props.setPost} />
    );
  }
}

const mapActionsToProps = (dispatch: Dispatch) => {
  const actions = { getPosts, setPost };
  return bindActionCreators(actions, dispatch);
};

const nexus = connect(
  null,
  mapActionsToProps
)(PostList);

export default withRouter(nexus);

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import CommentList from "../components/comments/commentList";
import { IStore } from "../store";
import { addDialog } from "../store/dialog/actions";

const mapStateToProps = (state: IStore) => {
  return {
    post: state.post
  };
};

const mapActionsToProps = (dispatch: Dispatch) => {
  const actions = { addDialog };
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CommentList);

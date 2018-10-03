import { connect } from "react-redux";
import PostSingle from "../components/posts/postSingle";
import { IStore } from "../store/index";

const mapStateToProps = (state: IStore) => {
  return {
    post: state.post
  };
};

export default connect(mapStateToProps)(PostSingle);

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import DialogSingle from "../components/comments/dialogSingle";
import { IStore } from "../store";
import { removeDialog } from "../store/dialog/actions";

const mapStateToProps = (state: IStore) => {
  return {
    dialog: state.dialog
  };
};

const mapActionsToProps = (dispatch: Dispatch) => {
  const actions = { removeDialog };
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(DialogSingle);

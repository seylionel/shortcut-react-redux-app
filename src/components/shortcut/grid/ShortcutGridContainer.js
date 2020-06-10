import {connect} from "react-redux";
import ShortcutGrid from "./ShortcutGrid";

const mapStateToProps = state => ({
  shortcuts: state.raccourcis.shortcuts
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShortcutGrid);

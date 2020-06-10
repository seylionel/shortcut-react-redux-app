import {connect} from "react-redux";
import ShortcutCard from "./ShortcutCard";

const mapStateToProps = state => ({
    shortcuts: state.raccourcis.shortcuts
});


const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShortcutCard);

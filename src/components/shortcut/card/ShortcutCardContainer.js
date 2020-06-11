import {connect} from "react-redux";
import ShortcutCard from "./ShortcutCard";
import SoftwaresPage from "../../pages/softwares/SoftwaresPage";

const mapStateToProps = state => ({
    shortcuts: state.raccourcis.shortcuts

});


const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShortcutCard);

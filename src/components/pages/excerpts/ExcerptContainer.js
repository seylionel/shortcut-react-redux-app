import {connect} from "react-redux";
import Excerpts from "./Excerpts";

const mapStateToProps = state => ({
    shortcuts: state.raccourcis.shortcuts
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Excerpts);

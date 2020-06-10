import {connect} from "react-redux";
import SoftwaresPage from "./SoftwaresPage";

const mapStateToProps = state => ({
    software: state.raccourcis.software
});

const mapDispatchToProps = dispatch => ({

});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SoftwaresPage);

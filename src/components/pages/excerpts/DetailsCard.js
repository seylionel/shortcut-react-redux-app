import React, {Component} from "react";
import {connect} from "react-redux";



class DetailsCard extends Component {
    render() {
            const shortcut = this.props.shortcut ? (
                <div className="shortcut">
                    <h2>{this.props.shortcut.title}</h2>
                    <p>{this.props.shortcut.description}</p>
                    <p>{this.props.shortcut.context}</p>


                </div>
            ) : (
                <p>BDZDQKSKQK</p>
            );
        return <div className="container">{shortcut}</div>;
    }
}



const mapStateToProps = (state, ownProps) => {
    let id = parseInt(ownProps.match.params.id);
    return{
        shortcut : state.raccourcis.shortcuts.find(shortcut => shortcut.id ===id)
    };

};

export default connect (mapStateToProps)(DetailsCard)
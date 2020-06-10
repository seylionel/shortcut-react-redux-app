import React, {Component} from "react";
import './../../shortcut/card/ShortcutCard.scss';




class DetailsCard extends Component {
    render() {
            const shortcut = this.props.shortcut ? (
                <div className="shortcut">
                    <img src={process.env.REACT_APP_UPLOADS_DIR + '/' + this.props.shortcut.software.logo} className="card-img-top" alt={this.props.shortcut.software.name}/>
                    <h2>{this.props.shortcut.title}</h2>
                    <p>{this.props.shortcut.description}</p>
                    <p>{this.props.shortcut.context}</p>
                    <img src={process.env.REACT_APP_UPLOADS_DIR + '/' + this.props.shortcut.image} className="card-img-top" alt={this.props.shortcut.image}/>



                </div>
            ) : (
                <p>Chargement ...</p>
            );
        return <div className="container">{shortcut}</div>;
    }
}




export default DetailsCard;
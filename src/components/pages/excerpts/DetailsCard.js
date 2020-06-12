import React, {Component} from "react";
import "../../component.scss";
import Loader from 'react-loader-spinner';




class DetailsCard extends Component {
    render() {
            const shortcut = this.props.shortcut ? (
                <div className="shortcut">
                    <img src={process.env.REACT_APP_UPLOADS_DIR + '/' + this.props.shortcut.software.logo} className="card-img-top" alt={this.props.shortcut.software.name}/>
                    <h2>{this.props.shortcut.title}</h2>
                    <p>{this.props.shortcut.description}</p>
                    <p>{this.props.shortcut.context}</p>
                    <p>{this.props.shortcut.windows}</p>
                    <p>{this.props.shortcut.linux}</p>
                    <p>{this.props.shortcut.macos}</p>
                    <p>{this.props.shortcut.created_at}</p>
                    <img src={process.env.REACT_APP_UPLOADS_DIR + '/' + this.props.shortcut.image} className="card-img-top-2" alt={this.props.shortcut.image}/>



                </div>
            ) : (
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            );
        return <div className="container">{shortcut}</div>;
    }
}




export default DetailsCard;
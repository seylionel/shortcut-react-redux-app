import React, {Component} from 'react';
import './ShortcutCard.scss';
import {Link, Route} from "react-router-dom";


class ShortcutCard extends Component {
  render() {


    const {shortcut} = this.props;

    return (
      <div className="col mb-4 cardContainer">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{shortcut.title}</h2>
            <p className="card-text">{shortcut.context}</p>
            <img src={process.env.REACT_APP_UPLOADS_DIR + '/' + shortcut.software.logo} className="card-img-top" alt={shortcut.software.name}/>

            <Link to={'/DetailsCard/' + shortcut.id} >
              <button>Voir plus</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ShortcutCard;

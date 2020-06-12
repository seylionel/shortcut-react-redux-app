import React, {Component} from 'react';
import './../../shortcut/card/ShortcutCard.scss';
import {Link} from "react-router-dom";






class SoftwaresPage extends Component {
  render() {

    const {software}=this.props
    const softwaresJsx = software
        .map(software =>

          <li className="test" key={software.id}>
              {software.name}
              <Link to={'/softwares/' + software.id}>
                  <img src={process.env.REACT_APP_UPLOADS_DIR + '/' + software.logo} className="card-img-top" alt={software.name}/>
              </Link>
          </li> )

            ;




    return (
      <div>
          <ul className="test">{softwaresJsx} </ul>
      </div>
    );
  }
}

export default SoftwaresPage;

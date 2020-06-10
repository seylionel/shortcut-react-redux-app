import React, {Component} from 'react';
import './../../shortcut/card/ShortcutCard.scss';
import {Link, Route} from "react-router-dom";








class SoftwaresPage extends Component {
  render() {

    const {software}=this.props
      console.log(software)
    const softwaresJsx = software
        .map(software =>
            <ul className="test">
          <img src={process.env.REACT_APP_UPLOADS_DIR + '/' + software.logo} className="card-img-top" alt={software.name}/>


          <li>
              <Link to={'softwares/ShortcutCard/'}>
              {software.name}
              </Link>

          </li>

            </ul>);




    return (
      <div>

          <button>x</button>

        {softwaresJsx}
      </div>
    );
  }
}

export default SoftwaresPage;

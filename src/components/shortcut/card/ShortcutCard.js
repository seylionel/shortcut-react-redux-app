import React, {Component} from 'react';
import './ShortcutCard.scss';
import './../../component.scss';
import {Link} from "react-router-dom";
import Loader from 'react-loader-spinner';


class ShortcutCard extends Component {
  render() {


    const {shortcut} = this.props;

    if (shortcut.length===0){
      return <Loader type="Puff" color="#00BFFF" height={100} width={100}
      />;
    }



    return (

      <div className="col mb-4  ">
        <div className="card test_card__color">
          <div className="card-body test ">
            <Link to={'/DetailsCard/' + shortcut.id} >
              <button className="test_card__button">Voir plus</button>
            </Link>
            <h2 className="card-title test_card__title">{shortcut.title}</h2>

            <p className="card-text">{shortcut.context}</p>
            <img src={process.env.REACT_APP_UPLOADS_DIR + '/' + shortcut.software.logo} className="card-img-top " alt={shortcut.software.name}/>


          </div>
        </div>
      </div>
    );
  }
}

export default ShortcutCard;

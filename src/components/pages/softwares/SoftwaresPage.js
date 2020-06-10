import React, {Component} from 'react';



class SoftwaresPage extends Component {
  render() {

    const {software}=this.props

    console.log(software)
    const softwaresJsx = software
        .map(software =>
            <ul>
          <img src={process.env.REACT_APP_UPLOADS_DIR + '/' + software.logo} className="card-img-top" alt={software.name}/>
          <li> {software.name}</li>
            </ul>);




    return (
      <div>
        {softwaresJsx}
      </div>
    );
  }
}

export default SoftwaresPage;

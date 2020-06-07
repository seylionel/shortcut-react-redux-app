import React, {Component} from 'react';

class ShortcutCard extends Component {
  render() {
    const {shortcut} = this.props;

    return (
      <div className="col mb-4">
        <div className="card">
          <img src="" className="card-img-top" alt=""/>
          <div className="card-body">
            <h2 className="card-title">{shortcut.title}</h2>
            <p className="card-text">{shortcut.context}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ShortcutCard;

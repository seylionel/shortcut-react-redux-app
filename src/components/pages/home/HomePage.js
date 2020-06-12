import React, {Component} from 'react';
import './../../component.scss';
import ShortcutGridContainer from "../../shortcut/grid/ShortcutGridContainer";



class HomePage extends Component {
  render() {
    return (
        <div className='body-home'>
      <ShortcutGridContainer/>

        </div>

    );
  }
}

export default HomePage;

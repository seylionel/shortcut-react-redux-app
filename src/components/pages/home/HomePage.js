import React, {Component} from 'react';
import './../../component.scss';
import ShortcutGridContainer from "../../shortcut/grid/ShortcutGridContainer";
import ExcerptContainer from "../excerpts/ExcerptContainer";



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

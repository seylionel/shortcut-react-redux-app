import React, {Component} from 'react';
import ShortcutCardContainer from "../../shortcut/card/ShortcutCardContainer";
import ShortcutGrid from "../../shortcut/grid/ShortcutGridContainer";
import ExcerptContainer from "./ExcerptContainer";
import ShortcutCard from "../../shortcut/card/ShortcutCard";



class Excerpts extends Component {
    render() {
        const {shortcuts} = this.props;
        const shortcutsJsx = shortcuts.map(shortcut => <ShortcutCardContainer key={shortcut.id} shortcut={shortcut}/>);

        console.log(shortcutsJsx)
        return (
            <div>
                {shortcutsJsx}
            </div>
        );
    }
}

export default Excerpts;
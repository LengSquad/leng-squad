import React, {Component} from 'react';
import { getClassColor } from './API.js';
import './CharacterContainer.css';

import Paper from 'material-ui/Paper';

class CharacterContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let classColor = getClassColor(this.props.classID);

        return(
            <Paper className="container" zDepth={1}>
                <div className="name" style={{backgroundColor: classColor}}>
                    {this.props.name}
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </Paper>
        )
    }

}

export default CharacterContainer;
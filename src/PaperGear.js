import React, {Component} from 'react';
import './PaperGear.css';

import Character from './Character.js';

import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';

class PaperGear extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let characters = this.props.characters.map(character => {
            return (
                <Character key={character.character.name} name={character.character.name} rank={character.rank}/>
            )
        });

        return (
            <Paper zDepth={1}>
                <h1>Optimization</h1>
                <Checkbox label="Errors"/>
                <div className="character-container">
                    {characters}
                </div>
            </Paper>
        )
    }
}

export default PaperGear;
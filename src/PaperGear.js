import React, {Component} from 'react';

import Character from './Character.js';

import Paper from 'material-ui/Paper';

const style = {
    width: '100%',
    padding: 10,
    textAlign: 'center',
    display: 'inline-block',
};

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
            <Paper style={style} zDepth={1}>
                <h2>Enchants and Gems</h2>
                {characters}
            </Paper>
        )
    }
}

export default PaperGear;
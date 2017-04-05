import React, {Component} from 'react';
import './PaperGear.css';

import Character from './Character.js';

import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';

class PaperGear extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showErrors: false,
            showWarnings: true
        }

        this.checkError = this.checkError.bind(this);
        this.checkWarning = this.checkWarning.bind(this);
    }

    render() {
        let characters = this.props.characters.map(character => {
            return (
                <Character key={character.character.name} name={character.character.name} rank={character.rank} showError={this.state.showErrors} showWarning={this.state.showWarnings}/>
            )
        });

        return (
            <Paper className="paper-gear-container" zDepth={1}>
                <h1>Optimization</h1>
                <Checkbox label="Show gold loss" defaultChecked={false} onCheck={this.checkError}/>
                <Checkbox label="Show stat loss" defaultChecked={true} onCheck={this.checkWarning}/>
                <div className="character-container">
                    {characters}
                </div>
            </Paper>
        )
    }

    checkError(event, isChecked) {
        this.setState({showErrors: isChecked});
    }

    checkWarning(event, isChecked) {
        this.setState({showWarnings: isChecked});
    }
}

export default PaperGear;
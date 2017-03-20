import React, {Component} from 'react';
import { getGuildMembers, getCharacterInfo } from './API.js';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import PaperGear from './PaperGear';

import './Main.css';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            members: [],
            raiders: []
        }
    }

    render() {

        return (
            <div>
                <AppBar
                    title="Leng Squad"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                >
                </AppBar>
                <PaperGear characters={this.state.raiders}/>
            </div>
        );
    }

    componentDidMount() {
        getGuildMembers(guild => {
            console.log(guild);

            let raiders = guild.members.filter(member => {
                if(member.rank == 2) {
                    return false;
                }
                return member.rank <= 5;
            });
            raiders = raiders.sort(this.rank);

            this.setState({
                members: guild.members,
                raiders: raiders
            });
        });
    }

    rank(char1, char2) {
        return parseInt(char1.rank) - parseInt(char2.rank);
    }
}

export default Main;
import React, {Component} from 'react';
import { getGuildInfoAll } from './API.js';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

//import PaperGear from './PaperGear';

import './Main.css';
import Page from "./Components/Page";
import Feed from "./Containers/Feed";
import Members from "./Containers/Members";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guild: []
        }

        this.update = this.update.bind(this);
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Leng Squad"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                >
                </AppBar>
                <div className="main-content">
                    <Page title="Members" >
                        <Members members={this.state.guild.members}/>
                    </Page>
                    <Page title="Feed" >
                        <Feed news={this.state.guild.news}/>
                    </Page>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.update();
        setInterval(this.update, 10000);
        // getGuildMembers(guild => {
        //     console.log(guild);
        //
        //     let raiders = guild.members.filter(member => {
        //         if(member.rank == 2) {
        //             return false;
        //         }
        //         return member.rank <= 5;
        //     });
        //     raiders = raiders.sort(this.rank);
        //
        //     this.setState({
        //         members: guild.members,
        //         raiders: raiders
        //     });
        // });
    }

    update() {
        console.log("Fetching new data");
        getGuildInfoAll(guild => {
            console.log(guild.lastModified);
            
            this.setState({guild});
        });
    }

    rank(char1, char2) {
        return parseInt(char1.rank) - parseInt(char2.rank);
    }
}

export default Main;
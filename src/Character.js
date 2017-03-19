import React, {Component} from 'react';
import { getCharacterInfo, getClassColor, getSlotItem } from './API.js';
import {List, ListItem} from 'material-ui/List';
import Warning from 'material-ui/svg-icons/alert/warning';
import './Character.css';

import Paper from 'material-ui/Paper';

class Character extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            data: [],
            sockets: []
        }
    }

    render() {

        if (!this.state.show) {
            return(null);
        }

        let audit = this.state.data.audit;
        let classID = this.state.data.class;
        if (audit) {
            let classColor = getClassColor(classID);

            let socketInfo = null;
            if (this.state.missingSockets.length > 0) {

                let listItems = this.state.missingSockets.map(item => {
                    return <ListItem key={item} primaryText={item} leftIcon={<Warning color='#FF0000'/>}/>
                });

                socketInfo = (
                    <List>
                        {listItems}
                    </List>
                )
            }


            return (
                <Paper className="container" zDepth={1}>
                    <div className="name" style={{backgroundColor: classColor}}>{this.props.name}</div>
                    <div className="content">
                        <div className="sockets">
                            <span>Missing sockets</span>
                            <div>{socketInfo}</div>
                        </div>
                        <div>
                            <span>Missing enchants</span>
                        </div>
                    </div>
                </Paper>
            );
        }
        else {
            return (
                <Paper className="container" zDepth={1}>
                    <div>{this.props.name}</div>
                </Paper>
            )
        }

    }

    componentDidMount() {
        getCharacterInfo(this.props.name, data => {

            let show = false;

            let missingSockets = Object.keys(data.audit.itemsWithEmptySockets).map(id => {
                return getSlotItem(id);
            });

            if (missingSockets.length > 0) {
                show = true;
            }

            this.setState({data: data, show: show, missingSockets: missingSockets});
        });
    }

}

export default Character;
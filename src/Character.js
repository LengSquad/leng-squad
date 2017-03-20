import React, {Component} from 'react';
import { getCharacterInfo, isEnchantable, getErrorType, getSlotItem } from './API.js';
import './Character.css';


import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Warning from 'material-ui/svg-icons/alert/warning';
import Error from 'material-ui/svg-icons/alert/error';

import CharacterContainer from './CharacterContainer.js';

class Character extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            data: [],
        }
    }

    render() {

        if (!this.state.show) {
            return(null);
        }

        let audit = this.state.data.audit;
        let classID = this.state.data.class;
        if (audit) {

            let socketInfo = null;
            if (this.state.missingSockets.length > 0) {

                let listItems = this.state.missingSockets.map(item => {
                    return <ListItem key={"socket" + item} primaryText={item} leftIcon={<Warning color='#FF0000'/>}/>
                });

                socketInfo = (
                    <div className="sockets">
                        <span>Missing sockets</span>
                        <List>
                            {listItems}
                        </List>
                    </div>
                )
            }

            let enchantInfo = null;
            if (this.state.missingEnchants.length > 0) {

                let listItems = this.state.missingEnchants.map(item => {

                    if (getErrorType(item, 'enchant') == 'error') {
                        return <ListItem key={"enchant" + item} primaryText={item} leftIcon={<Error color='#FFFF00'/>}/>
                    }
                    return <ListItem key={"enchant" + item} primaryText={item} leftIcon={<Warning color='#FF0000'/>}/>
                });

                enchantInfo = (
                    <div className="enchants">
                        <span>Missing enchants</span>
                        <List>
                            {listItems}
                        </List>
                    </div>
                )
            }

            return (
                <CharacterContainer classID={classID} name={this.state.data.name}>
                    {socketInfo}
                    {enchantInfo}
                </CharacterContainer>
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
            let missingEnchants = Object.keys(data.audit.unenchantedItems).filter(id => {
                return isEnchantable(id);
            }).map(id => {
                return getSlotItem(id);
            });

            if (missingSockets.length > 0 || missingEnchants.length > 0) {
                show = true;
            }

            this.setState({data: data, show: show, missingSockets: missingSockets, missingEnchants: missingEnchants});
        });
    }

}

export default Character;
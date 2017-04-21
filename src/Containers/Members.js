import React, {Component} from 'react';
import './Members.css';

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import {getClassColor} from "../ColorPicker";

const rankMapping = {
    0: "Guild Master",
    1: "Officer",
    2: "Officer Alt",
    3: "Leng",
    4: "Raider",
    5: "Trialist",
    6: "Alt",
    7: "Social",
};

class Members extends Component {

    constructor(props) {
        super(props);
        this.state = {
            members: []
        };
    }

    componentWillReceiveProps(props) {
        if (props.members) {
            let members = props.members.sort(this.rank);
            this.setState({members});
        }
    }

    render() {

        console.log(this.state.members[0]);

        let lastRank = -1;
        const ranks = [];

        for (let i in this.state.members) {
            const member = this.state.members[i];
            if (member.rank > lastRank) {
                lastRank = member.rank;
                ranks[lastRank] = [member];
            }
            else {
                ranks[lastRank].push(member);
            }
        }

        let members = ranks.map((rankList, i) => {

            rankList = rankList.sort(this.name);

            let list = rankList.map(member => {

                const imageUrl = "https://render-eu.worldofwarcraft.com/character/" + member.character.thumbnail;
                const classColor = getClassColor(member.character.class);
                let secondaryText = null;
                if (member.character.spec) {
                    secondaryText = member.character.spec.name;
                }

                return <ListItem
                    leftAvatar={<Avatar src={imageUrl} />}
                    key={member.character.name}
                    primaryText={member.character.name}
                    secondaryText={<span style={{color: classColor}}>{secondaryText}</span>}
                />
            });

            return <ListItem
                key={i}
                primaryTogglesNestedList={true}
                primaryText={rankMapping[i]}
                secondaryText={"[" + rankList.length + "]"}
                nestedItems={list}
                nestedListStyle={{maxHeight: 400, overflow: "auto"}}
            />
        });

        return (
            <List style={{padding: 0}}>
                {members}
            </List>
        );
    }

    rank(member1, member2) {
        return member1.rank - member2.rank;
    }

    name(member1, member2) {
        return member1.character.name.localeCompare(member2.character.name);
    }
}

export default Members;
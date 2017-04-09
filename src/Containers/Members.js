import React, {Component} from 'react';
import './Members.css';

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const rankMapping = {
    0: "Guild Master",
    1: "Officer",
    2: "Officer Alt",
    3: "Leng",
    4: "Raider",
    5: "Trialist",
    6: "Social",
    7: "Alt"
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

            let list = rankList.map(member => {

                const imageUrl = "http://render-api-eu.worldofwarcraft.com/static-render/eu/" + member.character.thumbnail;

                return <ListItem
                    leftAvatar={<Avatar src={imageUrl}/>}
                    key={member.character.name}
                    primaryText={member.character.name}
                />
            });

            return <ListItem
                key={i}
                primaryTogglesNestedList={true}
                primaryText={rankMapping[i]}
                nestedItems={list}
            />
        });

        return (
            <List>
                {members}
            </List>
        );
    }

    rank(member1, member2) {
        return member1.rank - member2.rank
    }
}

export default Members;
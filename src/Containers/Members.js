import React, {Component} from 'react';
import './Members.css';

import Subheader from 'material-ui/Subheader';

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

        let lastRank = 0;

        console.log(this.state.members[0]);
        for (let i in this.state.members) {
            const member = this.state.members[i];
            if (member.rank > lastRank) {
                console.log(lastRank)
                lastRank = member.rank;
            }
            else {

            }
        }

        return (
            <div>
            </div>
        );
    }

    rank(member1, member2) {
        return member1.rank - member2.rank
    }
}

export default Members;
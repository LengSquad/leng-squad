import React, {Component} from 'react';
import './Page.css'

import Paper from 'material-ui/Paper';

class Page extends Component {
    render() {
        return (
            <div className="page" style={{width: this.props.width * 400, alignSelf: this.props.position}}>
                <div className="page-title">
                    {this.props.title}
                </div>
                <Paper zDepth={1} className="page-content">
                    {this.props.children}
                </Paper>
            </div>
        );
    }
}

Page.propTypes = {
    children: React.PropTypes.element.isRequired,
    title: React.PropTypes.string,
    width: React.PropTypes.number,
    position: React.PropTypes.string,
};

Page.defaultProps = {
    title: "Default Page Title",
    width: 1,
    position: "flex-start",
};

export default Page;
import React, {Component} from 'react';
import './Page.css'

import Paper from 'material-ui/Paper';

class Page extends Component {
    render() {
        return (
            <div className="page">
                <h3 className="container-title">
                    {this.props.title}
                </h3>
                <Paper zDepth={1} className="page-content">
                    {this.props.children}
                </Paper>
            </div>
        );
    }
}

export default Page;
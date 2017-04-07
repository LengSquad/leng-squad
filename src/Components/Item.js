import React, {Component} from 'react';
import {getItemColor} from "../../ColorPicker";
import './Item.css';

import Paper from 'material-ui/Paper';

class Item extends Component {
    render() {

        const item = this.props.item;

        const color = getItemColor(item.quality);

        let description = null;
        if (item.nameDescription != "") {
            const colorDescription = "#" + item.nameDescriptionColor;
            description = (
                <div style={{color: colorDescription}}>
                    {item.nameDescription}
                </div>
            );
        }

        const url = "http://media.blizzard.com/wow/icons/56/" + item.icon + ".jpg";

        return (
            <Paper className="item" zDepth={1}>
                <div style={{borderColor: color}} className="item-image-container">
                    <img src={url}/>
                </div>
                <div className="item-info">
                    <div className="item-info-box">
                        <div style={{color: color}}>{item.name}</div>
                    </div>
                    <div className="item-info-box">
                        {description}
                    </div>
                    <div className="item-info-box">
                        <div className="item-info-level">Item Level {item.itemLevel}</div>
                    </div>
                </div>
            </Paper>
        );
    }
}

export default Item;
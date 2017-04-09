import React, {Component} from 'react';
import './Feed.css';


import { getItemInfo } from '../API'
import Item from "../Components/Item";

class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: [],
            items: []
        };
    }

    componentWillReceiveProps(props) {
        if (props.news) {
            for (let i = 0; i < 10; i ++) {
                const news = props.news[i];
                if (news.type === "itemLoot") {
                    getItemInfo(news.itemId, news.context, news.bonusLists, itemData => {
                        news.item = itemData;
                        this.setState({news: props.news});
                    });
                }
                else {
                    console.log(news.type)
                }
            }
        }
    }

    render() {

        const news = this.state.news.map((news, i) => {

            const date = new Date(news.timestamp);

            let item = null;
            if (news.item) {
                item =  <Item item={news.item} url={news.item.icon}/>
            }

            if (i > 9) {
                return null;
            }

            return (
                <div key={i}>
                    <div>
                        <div className="feed-name">
                            {news.character}
                        </div>
                        {item}
                    </div>
                </div>
            )
        });

        return (
            <div>
                {news}
            </div>
        );
    }
}

export default Feed;
import React, {Component} from 'react';
import './Feed.css';


import { getGuildFeed, getItemInfo } from '../API'
import Item from "../Components/Item";

class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: [],
            items: []
        };
    }

    render() {

        const news = this.state.news.map((news, i) => {

            const date = new Date(news.timestamp);

            let item = null;
            if (news.item) {
                item =  <Item item={news.item} url={news.item.icon}/>
            }

            return (
                <div key={i}>
                    <div>
                        {news.character}
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

    componentDidMount() {
        getGuildFeed(data => {

            for (let i in data.news) {

                const news = data.news[i];
                if (news.type === "itemLoot") {
                    getItemInfo(news.itemId, news.context, news.bonusLists, itemData => {
                        news.item = itemData;
                        this.setState({news: data.news});
                    });
                }
                if (i == 9) {
                    console.log(news)
                    break;
                }
            }

        });
    }

}

export default Feed;
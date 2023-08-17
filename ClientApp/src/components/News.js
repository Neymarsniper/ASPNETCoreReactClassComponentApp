import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = []
    constructor()   // it is executed first before all the function like render or compoundDidMount...
    {
        super(); // this is called when an object is created and is mandatory to call super(); function.
        console.log("This is the News Component constructor");
        this.state = {
            articles: []
        }
    }
    async componentDidMount()  //it is a lifecycle method which is executed after constructor and render method
    { // now async function can wait for some promises to resolve
        let Url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9409a89806aa4c21ad939896d945af03";
        let data = await fetch(Url); // fetch API which takes url and return promise
        // async is used to resolve the fetch(url) first then return the following statements below..
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles }); // it populates all the articles from NewsAPI, means it is setting articles to parsedData type articles
    }
    render() {    // it is executed after the constructor
        return (
            <div className="container my-3">
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} />
                        </div>
                    }
                    )
                    }

                </div>
            </div>
        )
    }
}

export default News
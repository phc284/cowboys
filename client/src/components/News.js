import React, { Component } from 'react';
import axios from 'axios';

class News extends Component {
  constructor (props) {
    super(props);

    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles() {
    axios.get('/api/news')
      .then ((res) => {
        let articles = res.data;
        this.setState({
          articles
        })
      })
  }

  renderArticles() {
    return (
      this.state.articles.map((article, index) => {
          return (<div className="news-item" key={index}>
              <a target="_blank" rel="noopener noreferrer" href={article.url}>{article.title}</a>
            </div>)
      })
    )
  }


  render() {
  return (
      <div className="news">
        <div className="news-layout">
        <h2>Recent News<br/><span>Powered by NewsAPI</span></h2>
          {this.renderArticles()}
        </div>
      </div>
    );
  }
}

export default News;

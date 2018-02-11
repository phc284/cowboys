import React, { Component } from 'react';
import redditPhoto from '../images/cowboys-reddit.png';
import czonePhoto from '../images/cowboys-zone.png';

class Forums extends Component {
  render() {
    return (
      <div className="forums">
        <div className="forums-layout">
          <h2> Forums </h2>
          <div className="website-item">
            <a target="_blank" rel="noopener noreferrer" href="http://www.reddit.com/r/cowboys"><img src={redditPhoto} alt=""/></a>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="http://www.reddit.com/r/cowboys">
                <h3>Cowboys Subreddit</h3>
              </a>
              <br />Do you enjoy memes and trolls? Well you'll only find a good amount of the latter in this subreddit with 35,000+ users. You can find very active threads on game days, draft days, and other big events regarding the Cowboys. Every once in a while some good original content will be posted and you can check out <a target="_blank" rel="noopener noreferrer" href="https://reddit.com/r/nfl">r/NFL</a> for more content from NFL fans. David Helman and Scooter MaGruder are some names that are known to lurk in this forum. You may even find u/CarsonWentz and u/BrianDawkins around.
            </div>
          </div>
          <div className="website-item">
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://cowboyszone.com/">
                <h3>Cowboys Zone Forum</h3>
              </a>
              <br />Formerly known from cowboys-forum.com, this site is a simple forum based site about the Dallas Cowboys. It has an active community and seems to have more tame users than in the r/Cowboys community. You won't find as many trolls and memes, but much more active discussion about news and issues revolving the teams and players.
            </div>
            <a target="_blank" rel="noopener noreferrer" href="https://cowboyszone.com/"><img src={czonePhoto} alt=""/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Forums;

import React, { Component } from 'react';
import Header from "./Header";
import Websites from "./Websites";
import Forums from "./Forums";
import Twitter from "./Twitter";
import News from "./News";
import Footer from "./Footer";
import './homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <Header />
        <News />
        <Websites />
        <Forums />
        <Twitter />
        <Footer />
      </div>
    );
  }
}

export default Homepage;

import React, { Component } from 'react';
import Header from "./Header";
import Websites from "./Websites";
import Forums from "./Forums";
import Twitter from "./Twitter";
import News from "./News";
import Footer from "./Footer";
// import Info from "./components/Info";
import NavBar from "./NavBar";

class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <NavBar />
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

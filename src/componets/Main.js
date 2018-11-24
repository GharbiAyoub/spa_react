import React, { Component } from "react";

import {
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Staff from "./Staff";
import Contact from "./Contact";
import Head from "./Head";
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Head></Head>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/gallery" component={Staff} />
            <Route path="/contact" component={Contact} />
          </div>
          <div>
            <Footer></Footer>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
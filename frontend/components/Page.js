import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <h1>Hello I'm the page component</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Page;

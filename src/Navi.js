import React, { Component } from "react";

export default class navi extends Component {
  render() {
    return (
      <div>
        <h1 align="center">
          
          <p> {this.props.info.title} </p>
        </h1>
      </div>
    );
  }
}

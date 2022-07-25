import React, { Component } from "react";

export default class FormDemo1 extends Component {
  state = { UserName: "" };
  onChangeHandler = (event) => this.setState({ UserName: event.target.value });
  render() {
    return (
      <div>
        <form>
          <h3>User Name</h3>

          <input onChange={this.onChangeHandler} type="text">
            {" "}
          </input>
          <h3>User Name is {this.setState.UserName}</h3>
        </form>
      </div>
    );
  }
}

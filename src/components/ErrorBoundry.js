import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error);
    console.log(info);
  }

  render() {
    return (
      <div>
        {this.props.hasError ? (
          <h1>Opps. There is an error</h1>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

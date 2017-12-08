import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = { name: this.props.char.name };
    this.handleCharInput = this.handleCharInput.bind(this);
  }

  handleCharInput(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>{this.props.char.name}</h1>
        <input type="text" onChange={e => this.handleCharInput(e)} />
        <button
          onClick={() =>
            this.props.updateChar(this.props.index, this.state.name)
          }
        >
          UPDATE CHARACTER
        </button>
        <button onClick={() => this.props.destroyChar(this.props.index)}>
          DESTROY CHARACTER
        </button>
      </div>
    );
  }
}

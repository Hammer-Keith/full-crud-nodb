import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      name: ""
    };

    this.createChar = this.createChar.bind(this);
    this.updateChar = this.updateChar.bind(this);
    this.destroyChar = this.destroyChar.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
  }
  componentDidMount() {
    axios.get("/api/characters").then(response => {
      console.log(response);
      this.setState({ characters: response.data });
    });
  }
  createChar() {
    const char = {
      name: this.state.name,
      hair_color: "red",
      eye_color: "purple",
      birth_year: "19BBY"
    };

    axios
      .post("/api/characters", char)
      .then(response => {
        this.setState({ characters: response.data });
      })
      .catch(e => alert(e));
  }
  updateChar(id, name) {
    const updatedChar = {
      // name: name
      name
    };

    axios
      .put("/api/characters/" + id, updatedChar)
      .then(response => {
        this.setState({ characters: response.data });
      })
      .catch(console.log);
  }
  destroyChar(id) {
    axios
      .delete("/api/characters/" + id)
      .then(response => {
        this.setState({ characters: response.data });
      })
      .catch(console.log);
  }
  handleNameInput(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.characters.length > 0 &&
          this.state.characters.map((val, i) => (
            <Card
              key={i}
              updateChar={this.updateChar}
              destroyChar={this.destroyChar}
              char={val}
              index={i}
            />
          ))}
        <br />
        <br />
        <div>
          <button onClick={this.createChar}>CREATE CHARACTER</button>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

const data = "http://localhost:3333/smurfs";
const smurfData = {
  name: "",
  age: "",
  height: ""
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: smurfData,
      errMsg: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get(data)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => this.setState({ errMsg: err.message }))
      .finally(console.log(data));
  };

  handleInput = e => {
    e.persist();
    this.setState(prevState => {
      return {
        smurf: {
          ...prevState.smurf,
          [e.target.name]: e.target.value
        }
      };
    });
  };

  addData = () => {
    console.log("add happening");
    const newSmurf = this.state.smurf;

    axios
      .post(data, newSmurf)
      .then(() => this.fetchData());
  };

  render() {
    return (
      <div className="App">
        <SmurfForm
          smurf={this.state.smurf}
          handleInput={this.handleInput}
          addData={this.addData}
        />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;

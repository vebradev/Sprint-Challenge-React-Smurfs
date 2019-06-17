import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

const data = "http://localhost:3333/smurfs";
const smurfData = {
  name: "",
  age: "",
  height: ""
};

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
    axios.post(data, newSmurf).then(() => this.fetchData());
  };

  render() {
    return (
      <StyledDiv>
        <StyledNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/add">Add Smurf</NavLink>
        </StyledNav>

        <Route
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />

        <Route
          exact
          path="/add"
          render={props => (
            <SmurfForm
              {...props}
              smurf={this.state.smurf}
              handleInput={this.handleInput}
              addData={this.addData}
            />
          )}
        />
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  background-color: #e84545;
  padding: 0 0 40px 0;
  max-width: 500px;
  margin: 50px auto;
  border-radius: 4px;
  border: 1px solid #53354a;
`;

const StyledNav = styled.div`
  position: relative;
  background-color: #903749;
  padding: 20px;

  a {
    text-decoration: none;
    color: #fff;
    padding: 20px;

    &:hover {
      background-color: #53354a;
    }
  }

`;

export default App;

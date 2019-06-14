import React, { Component } from 'react';
import Smurf from './Smurf';
import styled from "styled-components";

class Smurfs extends Component {
  render() {
    return (
      <StyledDiv>
        <h1>Smurf Village</h1>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  color: #2b2e4a;
  font-weight: bold;
  font-family: monospace;
  font-size: 18px;

  h1 {
    font-size: 25px;
    text-align: center;
    text-transform: uppercase;
  }
`;

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;

import React from "react";
import styled from "styled-components";

function SmurfForm(props) {
  return (
    <StyledDiv>
      <input type="text" placeholder="Name" name="name" onChange={props.handleInput} />
      <br />
      <input type="text" placeholder="Age" name="age" onChange={props.handleInput} />
      <br />
      <input type="text" placeholder="Height" name="height" onChange={props.handleInput} />
      <br />
      <button onClick={props.addData}>Add to the village</button>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-family: monospace;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    color: #2b2e4a;
    margin: 0 0 15px 0;
  }

  span {
    font-size: 10px;
  }

  input {
    width: 70%;
    padding: 15px 30px;
    border-radius: 4px;
    background-color: #903749;
    color: #fff;
    outline: 0;
    border-style: none;
    font-size: 16px;
    transition: all 0.3s;

    &:focus-within {
      background: #53354a;
    }

    &::placeholder {
      color: #e84545;
    }
  }

  button {
    font-size: 16px;
    background-color: #53354a;
    padding: 15px 30px;
    border-radius: 4px;
    border: none;
    color: #e84545;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #2b2e4a;
      color: #fff;
    }
  }
`;

export default SmurfForm;

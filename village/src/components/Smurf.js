import React from "react";
import styled from "styled-components";

const Smurf = props => {
  return (
    <StyledDiv>
      <span>{props.name}</span>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-size: 20px;
  padding: 20px 30px;
  border-top: 1px solid #903749;
  transition: all 0.3s;
  cursor: pointer;

  &:last-child {
    border-bottom: 1px solid #903749;
  }

  &:hover {
    background-color: #fff;

    button {
      opacity: 1;
    }

    strong {
      color: #fff;
      transition: all 0.3s;
    }
  }

  strong {
    background-color: #2b2e4a;
    padding: 4px 15px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: normal;
    margin: 5px 0px;
    color: #e84545;
  }

  p {
    font-size: 15px;
    margin: 0;
  }

  button {
    /* background-color: #903749; */
    color: transparent;
    position: absolute;
    right: 0;
    top: 0;
    border: 0;
    height: 58px;
    width: 50px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
    outline: none;
    opacity: 0.1;

    &:hover {
      background-color: #2b2e4a;
    }

    &.update {
      right: -50px;
      background-color: gainsboro;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 20px;
    }

    &.delete {
      right: -100px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 20px;
      background-size: 15px;
      background-color: lightseagreen;
    }
  }
`;

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;

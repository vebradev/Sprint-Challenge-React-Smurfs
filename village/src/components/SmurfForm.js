import React from "react";

function SmurfForm(props) {
  return (
    <div className="SmurfForm">
      <input type="text" placeholder="Name" name="name" onChange={props.handleInput} />
      <br />
      <input type="text" placeholder="Age" name="age" onChange={props.handleInput} />
      <br />
      <input type="text" placeholder="Height" name="height" onChange={props.handleInput} />
      <br />
      <button onClick={props.addData}>Add to the village</button>
    </div>
  );
}

export default SmurfForm;

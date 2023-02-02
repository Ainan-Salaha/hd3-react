import React, { useState } from "react";
import "./App.css";


function App() {
  const [Component, setComponent] = useState(false);

  function backButton() {
    setComponent((prevValue) => {
      return !prevValue;
    });
  }
  const [state, setState] = useState({
    Name: "",
    Department: "",
    Rating: "",
    output: [],
  });

  let changeEvent = (change) => {
    setState({ ...state, [change.target.name]: change.target.value });
    // console.log(this.state);
  };

  let submitHandler = (sub) => {
    sub.preventDefault();
    const empObj = {
      Name: state.Name,
      Department: state.Department,
      Rating: state.Rating,
    };

    let arr = state.output;
    arr.push(empObj);
    setState({ ...state, output: arr });
    backButton();
    document.getElementById("form").reset();
  };

  if (Component) {
    return (
      <>
        <h1 id="heading">Employee Feedback Form</h1>
        
        <div id="dataShow">
          {state.output.map((value, index) => {
            return (
              <div id="dataBox" key={index}>
                Name :- {value.Name}
                <br />
                Department :- {value.Department}
                <br />
                Rating :- {value.Rating} <br />
              </div>
            );
          })}
        </div>
        <button onClick={backButton} id="back_btn">
          Go Back
        </button>
      </>
    );
  } else {
    return (
      <div id="container">
        <h1 id="heading">Employee Feedback Form</h1>
        <form id="form">
          <label htmlFor="Name" id="text">Name : </label>
          <input
            type="text"
            id="nameInput"
            name="Name"
            value={state.Name}
            onChange={changeEvent}
            placeholder="Enter Name"/>
        
          <br />

          <label htmlFor="Department" id="text">Department : </label>
          <input
            type="text"
            id="deptInput"
            name="Department"
            value={state.Department}
            onChange={changeEvent}
            placeholder="Enter Department"/>

          <br />
          
          <label htmlFor="Rating" id="text">Rating : </label>
          <select
            type="number"
            id="ratingInput"
            name="Rating"
            value={state.Rating}
            onChange={changeEvent}
            placeholder="Rating">

            <option>Select the Rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>

          <br />
          
          <button id="btn" onClick={submitHandler}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
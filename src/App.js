import "./App.css";
import Info from "./Info";
// import PropTypes from "prop-types";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Info />
      <ButtonState />
      {/* <AddItem text="Waleed" number={2} />
      <AddItem text="ur" number={3} />
      <AddItem text="Rehman" /> */}
    </div>
  );
}

// * State and Hooks

function ButtonState() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const updateTextClicked = () => {
    setText("Text Updated!");
  };

  const updateCountClicked = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Data text={text} count={count} />
      <button onClick={updateTextClicked}>Update Title</button>
      <button onClick={updateCountClicked}>Update Counter</button>
    </div>
  );
}

function Data(props) {
  return (
    <div>
      <p>Text: {props.text}</p>
      <p>Counter: {props.count}</p>
    </div>
  );
}

// * Function Component and Props types

// function AddItem({ text, number = 4 }) {
// function AddItem(props) {
//   const value = props.text;
//   const value = props.text;
//   return (
//     <form>
//       <label htmlFor="text-form">AddItem: </label>
//       <input type="text" id="text-form" value={value} />
//       {/* <p>{props.number}</p> */}
//       <p>{props.number}</p>
//     </form>
//   );
// }

// AddItem.defaultProps = {
//   number: 6,
// };

// AddItem.propTypes = {
//   number: PropTypes.number,
//   text: PropTypes.string,
// };

export default App;

import React, { Component } from "react";
// import PropTypes from "prop-types";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    // this.buttonPressed = this.buttonPressed.bind(this);
  }

  buttonPressed() {
    this.setState({
      title: "Inventory System",
    });
  }

  render() {
    return (
      <div>
        <h1>Title: {}</h1>
        <button onClick={() => this.buttonPressed()}>Update The Title</button>
        {/* <button onClick={this.buttonPressed}>Update The Title</button> */}
      </div>
    );
  }
}

// Info.defaultProps = {
//   title: "this is default title",
// };

// Info.propTypes = {
//   title: PropTypes.string,
// };

//  render() {
//     const title = this.props.title;
//     const showTitle = false;
//     if (!showTitle) {
//       return (
//         <dir>
//           <h1>{title}</h1>
//           <h1>{2 + 4}</h1>
//           <h1>Inventory System</h1>
//           <p>Manage your stuff.</p>
//         </dir>
//       );
//     } else {
//       return (
//         <div className="App">
//           <h1>Nothing to show</h1>
//         </div>
//       );
//     }
//   }

export default Info;

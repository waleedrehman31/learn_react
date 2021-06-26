import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  clickedButton() {
    this.setState({ count: this.state.count + 1 });
    console.log("clicked");
    this.props.destroy(false);
  }

  componentDidMount() {
    console.log("Mounted!");
  }

  componentDidUpdate() {
    console.log("Updated!");
  }

  componentWillMount() {
    console.log("Clean Up");
  }

  render() {
    return (
      <div>
        <p>Clicked: {this.state.count}</p>
        <button
          className="btn btn-primary"
          onClick={() => this.clickedButton()}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default Test;

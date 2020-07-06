import React, { Component } from "react";

export default class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    //called after component is updated
    console.log(prevProps);
    console.log(prevState);
    if (prevProps.counter.value != this.props.counter.value) {
      //Ajax call to get new data from the server when value of counter changes.
    }
  }
  componentWillUnmount() {
    console.log("Counter-Unmount");
    //you can remove listeners and stuff to clean up after the unmount
  }

  render() {
    console.log("Counter-Rendered");
  }
  state = {
    //value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  //constructor() {
  //  super();
  // this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //We could use the constructor but by changing the function to the arrow version like it is
  //below we can just avoid this all together. It works the same, fucking sick man.

  //handleIncrement = () => {
  //  console.log("increment clicked", this.state.count);
  // };

  //handleIncrement = (product) => {
  // console.log(product);
  //  this.setState({ value: this.state.value + 1 }); //changes state on add by +1
  //};

  //function that adds an id of 1 everytime its clicked, but we moved this to inline for
  //cleaner coding style
  //doHandleIncrement = () => {
  // this.handleIncrement({ id: 1 });
  // };
  renderTags() {
    if (this.state.tags.length === 0)
      return <p>There are no tags man fuck you!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    console.log("props", this.props);
    //let product = 1;
    return (
      <React.Fragment>
        {this.props.children}
        <span style={{ fontSize: 18 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <div style={{ padding: 20 }}></div>
        {this.state.tags.length === 0 &&
          "Please Create a New Tag You Have None Man WTF!"}
        <div>{this.renderTags()}</div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

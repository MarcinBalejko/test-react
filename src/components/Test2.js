import React, { Component, Fragment } from "react";

export class Test2 extends Component {
  state = {
    like: 20,
    dislike: 15,
    color: false,
  };

  addLike = () => {
    const oldLikeCount = this.state.like;
    const newLikeCount = oldLikeCount + 1;
    this.setState({
      ...this.state,
      like: newLikeCount,
      color: true,
    });
  };

  addDislike = () => {
    const oldDislikeCount = this.state.dislike;
    const newDislikeCount = oldDislikeCount + 1;
    this.setState({
      ...this.state,
      dislike: newDislikeCount,
      color: false,
    });
  };

  render() {
    return (
      <Fragment>
        <div>
          <button
            onClick={this.addLike}
            style={{
              backgroundColor: this.state.color === true ? "blue" : "",
            }}
          >
            Like ({this.state.like})
          </button>
          <button
            onClick={this.addDislike}
            style={{
              backgroundColor: this.state.color === false ? "blue" : "",
            }}
          >
            Dislike ({this.state.dislike})
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Test2;

// In this task I was asked to create a class component containing two buttons: Like and Dislike
// Each button provides a counter which is set initially to 20 for likes and 15 for dislikes.
// The number of likes and dislikes is contained in the component's state.
// The task also specified that with each click of the like button it should change it's color to blue,
// and correspondingly, the dislike button's color should be removed.

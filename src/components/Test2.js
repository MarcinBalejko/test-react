import React, { Component, Fragment } from "react";

export class Test2 extends Component {
  state = {
    like: 20,
    dislike: 15,
  };

  addLike = () => {
    const oldLikeCount = this.state.like;
    const newLikeCount = oldLikeCount + 1;
    this.setState({ like: newLikeCount });
  };

  addDislike = () => {
    const oldDislikeCount = this.state.dislike;
    const newDislikeCount = oldDislikeCount + 1;
    this.setState({ dislike: newDislikeCount });
  };

  render() {
    return (
      <Fragment>
        <div>
          <button onClick={this.addLike}>Like ({this.state.like})</button>
          <button onClick={this.addDislike}>
            Dislike ({this.state.dislike})
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Test2;

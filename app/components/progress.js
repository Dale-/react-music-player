import React from 'react'

let Progress = React.createClass({
  render() {
    return (
      <div className="componenet-progress row">
        { this.props.progress} s
      </div>
    );
  }
});

export default Progress;

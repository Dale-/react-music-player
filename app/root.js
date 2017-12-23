import React from 'react'
import Progress from './components/progress'

let Root = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <Progress
          progress={this.state.progress}
          onProgressChange={this.handleProgressChange}
          barColor="#ffee00"
        >
        </Progress>
      </div>
    );
  }
});

export default Root;

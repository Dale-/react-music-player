import React from 'react';
import './progress.less'

let Progress = React.createClass({
  changeProgess(e) {
    let progressBar = this.refs.progressBar;
    let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
    console.log(progress);
  },
  render() {
      return (
      	<div className="components-progress" ref="progressBar" onClick={this.changeProgess}>
            <div className="progress" style={{width: `${this.props.progress}%`}}></div>
      	</div>
      );
  }
});

export default Progress;

import React from 'react'
import Progress from '../components/progress'

let duration = null;
let Player = React.createClass({

  getInitialState() {
    return {
      progress: 0
    }
  },

  componentDidMount() {
		$("#player").bind($.jPlayer.event.timeupdate, (e) => {
      duration = e.jPlayer.status.duration;
			this.setState({
				progress: e.jPlayer.status.currentPercentAbsolute
			});
		});
  },

  componentWillUnmout() {
    $("#player").unbind($.jPlayer.event.timeupdate);
  },

  handleProgressChange(progress) {
    $("#player").jPlayer('play', duration * progress);
  },

  render() {
    return (
      <div>
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

export default Player;

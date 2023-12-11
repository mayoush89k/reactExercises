import { Component } from "react";

class Time extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.state.seconds == 59
        ? this.setState({
            seconds: 0,
            minutes: this.state.minutes + 1,
            hours: this.state.hours,
          })
        : this.state.minutes == 59
        ? this.setState({
            seconds: 0,
            minutes: 0,
            hours: this.state.hours + 1,
          })
        : this.state.hours == 23
        ? this.setState({ seconds: 0, minutes: 0, hours: 0 })
        : this.setState({ ...this.state, seconds: this.state.seconds + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    console.log(`Component Leaving the screen`);
  }
  render() {
    return (
      <div>
        <input
          type="number"
          max={23}
          min={0}
          maxLength={2}
          value={this.state.hours}
          onChange={() =>
            this.state.hours == 24 &&
            this.setState({ seconds: 0, minutes: 0, hours: 0 })
          }
        />
        <input
          type="number"
          max={59}
          min={0}
          maxLength={2}
          value={this.state.minutes}
          onChange={() =>
            this.state.minutes == 60 &&
            this.setState({
              seconds: 0,
              minutes: 0,
              hours: this.state.hours + 1,
            })
          }
        />
        <input
          type="number"
          max={59}
          min={0}
          maxLength={2}
          value={this.state.seconds}
          onChange={() => {
            console.log(this.state.seconds);

            this.state.seconds == 60 &&
              this.setState({
                seconds: 0,
                minutes: this.state.minutes + 1,
                hours: this.state.hours,
              });
          }}
        />
      </div>
    );
  }
}
export default Time;

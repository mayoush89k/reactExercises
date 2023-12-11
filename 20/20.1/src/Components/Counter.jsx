import { Component } from "react";

class CounterClass extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Component MOUNTED !!! ");
  }

  componentWillUnmount() {
    console.log(`Component Leaving the screen`);
  }

  componentDidUpdate(_, prevState) {
    console.log(`Component UPDATED`);
    console.log(`-----------------------`);
    console.log(`Component PrevState`, prevState);
    console.log(`-----------------------`);
    console.log(`Component NewState`, this.state);
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState((current) => {
              return {
                count: current.count + 1,
              };
            });

            //! update state but no render
            // this.state = { count: this.state.count + 1 };
          }}
        >
          Increment
        </button>
        <button onClick={() => {
            this.setState((current) => {
                return {
                    count: current.count - 1,
                };
            });
        }}>Decrement</button>
        <h1 id={this.state.count > 0 ? "positive" : this.state.count < 0 ? "negative" : "zero"}>{this.state.count}</h1>
      </div>
    );
  }
}

export default CounterClass;

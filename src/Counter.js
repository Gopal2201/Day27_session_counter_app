 import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    Increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    Decrement = () => {
        if (this.state.count > 0)
        {
        this.setState({ count: this.state.count - 1 });
        }
    }

    Reset = () => {
        this.setState({ count: 0 });
    }

    render() {
        return(
        <>
            <p>count: {this.state.count}</p>
            <button onClick={this.Increment}> Increment</button>
            <button onClick={this.Decrement}>Decrement</button>
            <button onClick={this.Reset}>Reset</button>
        </>
        )}
}

export default Counter;
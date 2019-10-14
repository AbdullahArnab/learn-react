import React, {Component} from  'react';

class Counter extends Component{
    state = {
        value: this.props.counter.value
    };

    // constructor(){
    //     super();
    //     // console.log("Constructor", this)
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // handleIncrement = () => {
    //     // this.state.count++;
    //     // console.log(product)
    //     // this.props.value = 0;
    //     this.setState({value: this.state.value + 1})
    // };

    render(){
        // console.log('props', this.props);
        return (
            <div className="row">
                <div className="col-1">
                    <span className={"badge badge-warning"}>{this.props.counter.value}</span>
                    <span>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button
                        onClick={() => this.props.onIncrement(this.props.counter)}
                        className={"btn btn-success m-2"}

                    >
                        +
                    </button>
                    <button
                        onClick={() => this.props.onDecrement(this.props.counter)}
                        className={"btn btn-warning m-2"}
                        disabled={this.props.counter.value === 0}
                    >
                        -
                    </button>
                    <button
                        onClick={() => this.props.onDelete(this.props.counter.id)}
                        className={"btn btn-primary m-2"}

                    >
                        Delete
                    </button>
                </div>
            </div>
        )
    };

    formatCount(){
        const {count} = this.props.counter;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component{
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 5},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    };

    handleIncrement = counter => {
        // console.log(counter);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
        // console.log(this.state.counters[index]);
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: counters})
        // console.log("Event Handler Called", counterId);
    };

    render() {
        return (
            <React.Fragment>
                {this.state.counters.map(counter =>
                    <Counter key={counter.id} onDelete={this.handleDelete}  onIncrement={this.handleIncrement} counter={counter} selected>
                        {/*<h4>Counter {counter.id}</h4>*/}
                    </Counter>)
                }
            </React.Fragment>
        );
    }
}

export default Counters;
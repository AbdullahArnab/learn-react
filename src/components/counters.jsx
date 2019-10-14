import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component{
    render() {
        return (
            <React.Fragment>
                {this.props.counters.map(counter =>
                    <Counter key={counter.id} onDelete={this.props.onDelete}  onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} counter={counter} selected>
                        {/*<h4>Counter {counter.id}</h4>*/}
                    </Counter>)
                }
            </React.Fragment>
        );
    }
}

export default Counters;
import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counter from './components/counters';

class App extends Component {
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

    handleDecrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value--;
      this.setState({counters});
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: counters});
        // console.log("Event Handler Called", counterId);
    };

    render() {
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <main className="container">
                    <Counter counters={this.state.counters} onDelete={this.handleDelete} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
                </main>
            </React.Fragment>
        );
    }

}

export default App;

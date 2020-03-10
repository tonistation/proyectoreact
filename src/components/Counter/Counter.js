import React from 'react'
import { Counter } from "./Counter.styles";
import { connect } from 'formik';


class CounterComponent extends React.Component {
    state = {
        currentNumber: 10,
    };

    onIncrement = () => {
        this.setState(prevState => {
            currentNumber: prevState.currentNumber + 1,
        })
    }

    onDecrement = () => {
        this.setState(prevState => {
            currentNumber: prevState.currentNumber - 1,
        })
    }
    render(){
        const  { currentNumber } = this.state
         return (
            <Counter>
                <h3>
                    { currentNumber }
                </h3>
                <div>
                    <button onClick={this.onIncrement}>+1</button>
                    <button onClick={this.onDecrement}>-1</button>
                </div>
            </Counter>
        )
    };
   
}

const mapStateToProps = (store) => {
    return store
}

const mapDispatchToProps = (dispath) => {

 }
export default connect(mapStateToProps)(CounterComponent)

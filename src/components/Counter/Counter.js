import React from 'react';
import { connect } from 'react-redux';
import {increment, decrement} from '../../redux/actions/counter';
import { Button } from 'antd';

class Counter extends React.Component {

    increment = () => {
        this.props.dispatch(increment());
      }
    
      decrement = () => {
        this.props.dispatch(decrement());
      }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <Button type="primary" onClick={this.decrement}>-</Button>
          <span>{this.props.count}</span>
          <Button type="danger" onClick={this.increment}>+</Button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      count: state.count
    };
}

  export default connect(mapStateToProps)(Counter);
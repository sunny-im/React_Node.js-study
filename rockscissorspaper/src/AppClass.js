import React, { Component } from 'react'
import BoxClass from './BoxClass';

export default class AppClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter:0,
      num:1,
      value:0,
    }
  }
  increase=()=>{
    // react가 가지고 있는 setState 함수를 이용
    this.setState({
      counter:this.state.counter+1, 
      value:this.state.value+1});
  }
  render() {
    return (
      <div>
          <div>state:{this.state.counter}</div>
          <button onClick={this.increase}>클릭</button>
          <BoxClass num={this.state.value}></BoxClass>
      </div>
    )
  }
}

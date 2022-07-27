import React, { Component } from 'react'
import BoxClass from './BoxClass';

export default class AppClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter:0,
      num:1,
      value:0,
    };
    console.log("1. constructor안에서 state를 만든다")
  }
  increase=()=>{
    // react가 가지고 있는 setState 함수를 이용
    this.setState({
      counter:this.state.counter+1, 
      value:this.state.value+1
    });
    console.log("4.increase function", this.state);
  }

  componentDidMount(){
    console.log("3.componentDidMount - API콜");
  }

  componentDidUpdate(){
    console.log("6.componentDidUpdate-업데이트",this.state);
  }
  render() {
    console.log("2/5.render - UI만들기")
    return (
      <div>
          <div>state:{this.state.counter}</div>
          <button onClick={this.increase}>클릭</button>
          {this.state.counter <3 && <BoxClass num={this.state.value}></BoxClass>}
      </div>
    )
  }
}

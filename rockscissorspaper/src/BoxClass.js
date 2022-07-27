import React, { Component } from 'react'


export default class BoxClass extends Component {
  componentWillUnmount(){
    console.log("7.componentWillUnmount - 종료 byebye")
  }
  render() {
    return (
      <div>
          Box{this.props.num}
      </div>
    )
  }
}

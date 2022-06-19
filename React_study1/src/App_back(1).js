import React, {Component} from 'react';

class App extends Component {
  state = {
    // hello: 'hello App.js !!'
    count : 0
  };

  // handleChange = () => {
  countUp = () => {
    this.setState({
      // hello: 'bye App.js!'
      count: this.state.count + 1
    });
  };
  

  render() {
    return (
      <div className="App">
        {/* JSX에 변수를 넣을 때에는 중괄호{}를 사용! */}
        {/* <div className="App">{this.state.hello}</div> */}
        <div>{this.state.count}</div>
        {/* <button onClick={this.handleChange}>click Me!</button> */}
        <button onClick={this.countUp}>count Up!</button>
        {/* 여긴 HTML 파일이 아닌 JSX 파일이므로 JSX가 HTML로 바뀌는 과정에서 함수가 실행되기 때문에 this.handleChange()가 아닌 this.handleChane 로 작성해야 한다. */}
      </div>
    );
  }
}
export default App;

import React, {Component} from 'react';
import Tab from './Tab';

class App extends Component {
  state = {
    count : 0,
  };

  handleChange = () => {
    this.setState({
      count: this.state.count + 1
    });
  }; 
  

  render() {
    return (
      <div className="App">
        <h3>index Props</h3>
        <div className="props">
          {/*Props가 들어가는 부분*/}
          <span>{this.props.message}</span>
        </div>

        <h3>State</h3>
        <div className="state">
          {/*State가 들어가는 부분*/}
          {this.state.count}
          <button onClick={this.handleChange}>Click Me !</button>
        </div>

        <h3>App Props</h3>
        <div className="inside-app-props">
          <InsideApp
            count={this.state.count}
            handleChange={this.handleChange}
          />
        </div>

        <h3>Tab</h3>
        <Tab/>
      </div>
    );
  }
}

// InsideApp 컴포넌트를 생성하여 App.js에서 InsideApp 컴포넌트를 받아오고, App 컴포넌트의 state인 count와 handleChange 메소드를 상속시켜줌
class InsideApp extends Component {
  render() {
    return (
      <div>
        {this.props.count}
        <button onClick={this.props.handleChange}>Click Me !</button>
      </div>

    );
  }
}
//Props를 직접 변경은 불가능하지만 상위컴포넌트에서 state를 변경하는 메소드를 props로 끌어옴으로써 간접적으로 변경이 가능하게 하였다.
export default App;

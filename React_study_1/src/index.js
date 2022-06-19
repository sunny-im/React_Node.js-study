import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // message라는 변수를 App.js가 Props로 사용할 수 있게 전달(상속)
  <App message="Hello Message" />,
  document.getElementById('root')
);

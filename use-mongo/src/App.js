import './App.css';
import axios from 'axios';

function App() {
  const connectMongo = () => {
    axios.get('http://localhost:8001/')
    .then((res)=>{
      console.log("res",res);
    })
  }
  return (
    <div>
      <button onClick={connectMongo}>연결?</button>
      
    </div>
  );
}

export default App;

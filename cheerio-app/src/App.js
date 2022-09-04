import './App.css';
import Home from './components/Home';
import Menubar from './components/Menubar';
import News from './components/News';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Menubar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/news" element={<News/>}/>
      </Routes> 
    </div>
  );
}

export default App;

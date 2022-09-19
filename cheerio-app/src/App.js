import './App.css';
import Home from './components/Home';
import Menubar from './components/Menubar';
import News from './components/News';
import NaverAPI from './components/NaverAPI';
import Starbucks from './components/Starbucks';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Menubar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/naverapi" element={<NaverAPI/>}/>
        <Route path="/starbucks" element={<Starbucks/>}/>
      </Routes> 
    </div>
  );
}

export default App;

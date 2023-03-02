import './App.css';
import Infinite_a from './page/Infinite_a'
import Infinite_b from './page/Infinite_b'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menubar from './component/Menubar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menubar/>}/>
        <Route path="/a" element={<Infinite_a/>}/>
        <Route path="/b" element={<Infinite_b/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

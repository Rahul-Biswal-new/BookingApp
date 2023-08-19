import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './page/home/Home';
import List from './page/list/List.jsx';
import Hotel from './page/hotel/Hotel.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

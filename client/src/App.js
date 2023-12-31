import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./page/home/Home";
import Hotel from "./page/hotel/Hotel";
import List from "./page/list/List";
import Login from "./page/login/Login";

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
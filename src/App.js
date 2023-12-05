import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './views/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Home/>}></Route>

    </Routes>
  </BrowserRouter>
   
  );
}

export default App;

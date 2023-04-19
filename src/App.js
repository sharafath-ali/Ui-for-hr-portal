import './App.css';
import MainNavbar from './compoents/MainNavbar';
import MainBanner from './compoents/MainBanner';
import Cards from './compoents/cards';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeAdd from './compoents/EmployeeAdd';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
    
      <Routes>
      <Route path='/' element={<Cards/>} />
       <Route path='/add' element={<EmployeeAdd/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

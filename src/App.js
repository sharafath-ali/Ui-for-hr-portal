import './App.css';
import MainNavbar from './compoents/MainNavbar';
import MainBanner from './compoents/MainBanner';
import Cards from './compoents/cards';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeAdd from './compoents/EmployeeAdd';
import Profile from './compoents/Profile';
import Document from './compoents/Document';
import Upload from './compoents/Upload';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
       <Route path='/' element={<Cards/>} />
       <Route path='/add' element={<EmployeeAdd/>} />
       <Route path='/Employeeprofile' element={<Profile/>} />
       <Route path='/ViewDocuments' element={<Document/>} />
       <Route path='/Upload' element={<Upload/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

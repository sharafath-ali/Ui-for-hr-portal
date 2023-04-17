import './App.css';
import MainNavbar from './compoents/MainNavbar';
import MainBanner from './compoents/MainBanner';
import EmployeeCard from './compoents/EmployeeCard';
function App() {
  return (
    <div className="App">
      <MainNavbar/>
      <MainBanner/>
    <div className='container'>
      <h1 className='mt-5 fw-bold'>Employees</h1>
    <div className='row mb-5'>
      <EmployeeCard/>
      <EmployeeCard/>
      <EmployeeCard/>
      <EmployeeCard/>
      <EmployeeCard/>
      <EmployeeCard/>
      <EmployeeCard/>
      </div>
    </div>
      
    </div>
  );
}

export default App;

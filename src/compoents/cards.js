import React from 'react'
import EmployeeCard from './EmployeeCard'
import MainBanner from './MainBanner'
import MainNavbar from './MainNavbar'
function Cards() {
  return (
    <>
    <MainNavbar/>
    <MainBanner /><div className='container'>
          <h1 className='mt-5 fw-bold'>Employees</h1>
          <div className='row mb-5'>
              <EmployeeCard />
              <EmployeeCard />
              <EmployeeCard />
              <EmployeeCard />
              <EmployeeCard />
              <EmployeeCard />
          </div>
      </div></>
  )
}

export default Cards
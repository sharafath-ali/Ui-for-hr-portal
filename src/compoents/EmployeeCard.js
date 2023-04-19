import React from 'react'
import './EmployeeCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import profile1 from '../assets/profile1.jpg'
function EmployeeCard() {
  return (
   <div className='col-lg-3 col-md-4 col-sm-6 mt-5 col-xl-3'>
       <Card className='emp-card rounded-5 card-shadow' style={{ width: '100%' }}>
      <Card.Img className='rounded-5 p-2' variant="top" src={profile1} />
      <Card.Body>
        <Card.Title className='text-left fs-6 fw-bold' >Sharafath Ali <span className='designation-text'>(React Trainee)</span></Card.Title>
        <Card.Text className='text-left font-size-sm pb-3' >
        As a React developer, I have a passion for creating highly functional and intuitive web applications that provide an exceptional user experience.
        </Card.Text>
      </Card.Body>
    </Card>
   </div>
  )
}

export default EmployeeCard
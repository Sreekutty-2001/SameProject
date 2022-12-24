import React from 'react'
import './Login.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
function Login() {
  return (
    
    <>
    <div className='background-img'>
    <Form className='login-form'>
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
     </Form>
     </div> 
     
</>
  )
   }
export default Login
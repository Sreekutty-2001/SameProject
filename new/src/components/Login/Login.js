import React from 'react'
import './Login.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Login() {
  return (

    <>
      <div className='background-img'>
        <div className="login-form-div">
          <div className="heading">
          <h4>Welcome Back</h4>
          </div>
          
        <Form className='login-form'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>👤 Username</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>🔒 Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>

          <div className="btn-fgps" >
          <Button id='login-btn' variant="primary" type="submit">
            Login
          </Button>
          <h6 className='forgotpass'>Forgot Password ? </h6>
          </div>
         
          <h6 className='signup-heading'>Don't have an account ? <Link className='signup-link'to={"/signup"}>Sign Up</Link></h6>
        </Form>
        </div>
        
      </div>

    </>
  )
}
export default Login
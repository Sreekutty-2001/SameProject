import React from 'react'
import './SignUp.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Badge } from '@mui/icons-material';
import { Link } from 'react-router-dom';
function SignUp() {
  return (


    <div className="signup">

      <div className="main">
        <div className="sign-heading">
          <h4> Create Account,</h4>
          <h6 className='start'>SignUp to get started!</h6>

        </div>
        <Form className='sign-form'>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>👤 Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>📧 User Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>🔒 Password   </Form.Label>
            <Badge></Badge>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
          <div className="signup-btn">
          <Button id='signup-btn' variant="primary" type="submit">
            SignUp
          </Button>
          <div className="signup-footer">
            <h6 className='with'>Sign Up with </h6>

            <h6 className='Terms'>By Signing up,you are agree with our <Link id='link'>Terms & Conditions</Link>

            </h6>
          </div>
        </div>
        </Form>
       

      </div>

    </div>


  )
}

export default SignUp
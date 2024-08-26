import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import '../assets/styles/searchinputstyles.css'
import { FaUser } from 'react-icons/fa'

const SearchInputs = () => {
  return (
        <Form>
         <Row className='my-4'>
          <Col xs={6} sm={4} xl={3} className='my-1'>
                <Form.Group className="mb-3 position-relative" controlId="formBasicName">
                  <FaUser size={15} className='userIcon'/>
                  <Form.Control type="text" placeholder="Search" className='contactNumberInput' />
                </Form.Group>
          </Col>
          <Col xs={6} sm={4} xl={3} className='my-1'>
          <div className="mb-3 position-relative">
          <FaUser size={15} className='userIcon'/>
          <Form.Select aria-label="Default select example" defaultValue={'DEFAULT'} className='contactNumberInput'>
                <option value="DEFAULT" disabled>UID No</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
           </Form.Select>
           </div>
          </Col>
          <Col xs={6} sm={4} xl={3} className='my-1 mb-2'>
          <div className="mb-3 position-relative">
          <FaUser size={15} className='userIcon'/>
          <Form.Select aria-label="Default select example" defaultValue={'DEFAULT'} className='contactNumberInput'>
                <option value="DEFAULT" disabled>UID No</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
           </Form.Select>
           </div>
          </Col>
          <Col xs={6} sm={4} xl={3} className='my-1 mb-2'>
          <div className="mb-3 position-relative">
          <FaUser size={15} className='userIcon'/>
          <Form.Select aria-label="Default select example" defaultValue={'DEFAULT'} className='contactNumberInput'>
                <option value="DEFAULT" disabled>UID No</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
           </Form.Select>
           </div>
          </Col>
          <Col xs={6} sm={4} xl={3} className='my-1'>
                <Form.Group className="mb-3 position-relative" controlId="formBasicName">
                  <FaUser size={15} className='userIcon'/>
                  <Form.Control type="text" placeholder="UID No" className='contactNumberInput' />
                </Form.Group>
          </Col>
          <Col xs={6} sm={4} xl={3} className='my-1'>
                <Form.Group className="mb-3 position-relative" controlId="formBasicName">
                  <FaUser size={15} className='userIcon'/>
                  <Form.Control type="text" placeholder="UID No" className='contactNumberInput' />
                </Form.Group>
          </Col>
          <Col xs={6} sm={4} xl={3} className='my-1'>
                <Form.Group className="mb-3 position-relative" controlId="formBasicName">
                  <FaUser size={15} className='userIcon'/>
                  <Form.Control type="text" placeholder="UID No" className='contactNumberInput' />
                </Form.Group>
          </Col>
          <Col xs={6} sm={4} xl={3} className='my-1'>
                <Form.Group className="mb-3 position-relative" controlId="formBasicName">
                  <FaUser size={15} className='userIcon'/>
                  <Form.Control type="text" placeholder="UID No" className='contactNumberInput' />
                </Form.Group>
          </Col>
          </Row>
        </Form>
  )
}

export default SearchInputs
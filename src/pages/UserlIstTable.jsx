import React from 'react'
import {Container, Row, Col, Form} from 'react-bootstrap'
import {FaStar, FaSearch} from 'react-icons/fa'
import '../assets/styles/userlistablestyles.css'
import FilterBox from '../components/FilterBox'
import UserTable from '../components/UserTable'

const UserlIstTable = () => {

  const userData = [
    { id: 'T100-UNM-034', date: '30/07/2024', species: 'Quassia palm', height: 13.2, diameter: 12.1, availability: 170 },
    { id: 'T100-UNM-056', date: '30/07/2024', species: 'Maple', height: 25.1, diameter: 25, availability: 200 },
    { id: 'T100-UNM-076', date: '30/07/2024', species: 'Pine', height: 16.2, diameter: 22.5, availability: 180 },
    { id: 'T100-UNM-087', date: '30/07/2024', species: 'Cedar', height: 14.2, diameter: 16, availability: 170 },
    { id: 'T100-UNM-092', date: '30/07/2024', species: 'Willow', height: 12.1, diameter: 16.2, availability: 220 }
  ];
  
  return (
    <Container fluid className='userListTableContainer'>
    <Row className='userListTableRow p-2'>
        <Col xs={12} sm={6} className='userNameCol'>
         <p className='m-0 p-0 userTableList'>New User List</p>
        </Col>
        <Col xs={12} sm={6} className='d-flex userTableCol'>
        <Form>
            <Form.Group className="position-relative mx-2" controlId="formBasicName">
                    <FaSearch size={15} className='userTableIcon'/>
                    <Form.Control type="text" placeholder="Search" className='SearchInput' />
            </Form.Group>
        </Form>
        <div className='d-flex align-items-center justifty-content-center'>
            <button className='addNewButton d-flex align-items-center justifty-content-center py-2 px-1'>
                <FaStar size={10} className='ms-1 me-3'/>
                Add New
            </button>
        </div>
        </Col>
        <Col xs={12}>
         <FilterBox/>
        </Col>
        <Col xs={12}>
         <UserTable data={userData}/>
        </Col>
    </Row>
  </Container>
  )
}

export default UserlIstTable
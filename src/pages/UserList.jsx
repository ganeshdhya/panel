import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {FaPlus} from 'react-icons/fa'
import '../assets/styles/userliststyles.css'
import SearchInputs from '../components/SearchInputs'

const UserList = () => {
  return (
    <Container fluid className='userListContainer'>
        <Row className='userListRow p-2'>
            <Col xs={6}>
             <p className='m-0 p-0 userList'>New User List</p>
            </Col>
            <Col xs={6} className='d-flex justify-content-end'>
            <div className='d-flex align-items-center justifty-content-center gap-2'>
                <button className='cancelButton d-flex align-items-center justifty-content-center py-2'>
                    <FaPlus size={10} className='mx-2'/>
                    Cancel
                </button>
                <button className='saveButton d-flex align-items-center justifty-content-center py-2'>
                    <FaPlus size={10} className='mx-2'/>
                    Save
                </button>
            </div>
            </Col>
            <Col xs={12} className='m-0 p-0'/>
            <SearchInputs/>
        </Row>
    </Container>
  )
}

export default UserList
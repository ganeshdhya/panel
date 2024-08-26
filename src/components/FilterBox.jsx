import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../assets/styles/filterboxstyles.css'
import { FaFilter, FaEye } from 'react-icons/fa'

const FilterBox = () => {
  return (
    <Row className='d-flex align-items-center justify-content-center'>
       <Col xs={12} sm={6} className='filterTabCol my-3'>
         <div className='d-flex justify-content-center align-items-center filerSpanTab gap-3'>
            <a className='d-flex justify-content-center align-items-center gap-1 m-0 p-0'>All<span className='filterSpan px-2 py-1' style={{backgroundColor: 'rgb(21, 21, 95)'}}>27</span></a>
            <a className='d-flex justify-content-center align-items-center gap-1 m-0 p-0'>Active<span className='filterSpan px-2 py-1' style={{backgroundColor: 'green'}}>4</span></a>
            <a className='d-flex justify-content-center align-items-center gap-1 m-0 p-0'>Inactive<span className='filterSpan px-2 py-1' style={{backgroundColor: 'red'}}>1</span></a>
         </div>
      </Col>
      <Col xs={12} sm={6} className='filterIconCol'>
       <div className='d-flex justify-content-center align-items-center filerIconTab gap-2'>
          <button className='d-flex justify-content-center align-items-center gap-1 filterIcon'>
            <FaFilter size={12} color='rgb(21, 21, 95)' className='mx-1'/>
            <span className='buttonText'>Filter</span>
          </button>
          <button className='d-flex justify-content-center align-items-center gap-1'>
            <FaEye size={12} color='rgb(21, 21, 95)' className='mx-1'/>
            <span className='buttonText'>Filter</span>
          </button>
          <button className='d-flex justify-content-center align-items-center gap-1'>
            <FaFilter size={12} color='rgb(21, 21, 95)' className='mx-1'/>
            <span className='buttonText'>EndPoint</span>
          </button>
          <button className='d-flex justify-content-center align-items-center gap-1'>
            <FaFilter size={12} color='rgb(21, 21, 95)' className='mx-1'/>
            <span className='buttonText'>Filter</span>
          </button>
       </div>
      </Col>
    </Row>
  )
}

export default FilterBox
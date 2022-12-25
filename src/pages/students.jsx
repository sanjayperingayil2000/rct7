import React from 'react'
import Header from '../components/header'
import Table from '../components/table'
import { useNavigate } from 'react-router-dom'

export default function Students() {

const navigate=useNavigate()
const New =()=>{
  navigate('/new');
}

  return (
    <>
    <Header />
    <div className='d-flex justify-content-between'>
      <h2 className='ms-5 mt-5'>Students Details</h2>
      <div className='btn' onClick={New}>Add new student</div>
    </div>
    <div className='m-5'>
      <Table />
    </div>
    </>
  )
}
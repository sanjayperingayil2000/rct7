import React from 'react'
import {Link} from 'react-router-dom'
import '../index.css'


export default function Header() {
return (
    <>
    
    <div className='nav pt'>
        <div className=''><Link className='h12 text-decoration-none' style={{textDecoration:"none"}} to="/">Home</Link></div>
        <div className=''><Link className='h12 text-decoration-none' style={{textDecoration:"none"}} to="/students">Students</Link></div>
        <div className=''><Link className='h12 text-decoration-none' style={{textDecoration:"none"}} to="/contactus">Contactus</Link></div>
    </div>
    </>
)
}
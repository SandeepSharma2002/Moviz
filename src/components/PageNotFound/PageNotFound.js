import React from 'react'
import { Link } from 'react-router-dom'
import "./PageNotFound.css"

export default function PageNotFound() {
  return (
    <div className="not-found">
    <div className="page">
      Page Not Found
    </div>
    <Link to='/moviz'>
    <button className='Go-back'><span>Go Back</span></button>
    </Link>
    </div>
   
  )
}

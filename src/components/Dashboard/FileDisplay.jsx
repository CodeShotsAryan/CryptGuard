import React from 'react'
import { Link } from 'react-router-dom'
function FileDisplay() {
  return (
    <Link to={`filedetails`}>
    <div className='displayfile'>
        <div></div>
    </div>
    </Link>
  )
}

export default FileDisplay

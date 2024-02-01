import React from 'react'
import '../css/index.css'

export default function Navbar() {
  return (
    <div>
      <div className='left-nav-container'>
        <div className='portfolio-conatiner'>
          <p className='size-16' style={{ padding: '5px 5px 4px 14px' }}> Portfolio</p>
        </div>
        <div className='project-list-container size-16'>
          <span className='size-16' style={{ padding: '5px 5px 4px 14px' }}>Project List</span>
        </div>
      </div>
    </div>
  )
}

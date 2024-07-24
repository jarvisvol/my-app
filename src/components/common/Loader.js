import React from 'react'
import '../profile/index.css'

export default function Loader({active}) {
  return (
    
    <div className='loader' style={{display: `${active} ? 'none': 'normal'`}}></div>
  )
}

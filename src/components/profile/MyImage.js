import React from 'react'
import './index.css'

export default function MyImage({ topPosition }) {
    return (
        <div style={{ position: 'relative', left: '76vw', top: `${424 - topPosition}px` }}>
            <div className='my-image'>

            </div>
            <pre style={{ color: '#ffff', fontSize:'12px',  marginLeft: '11px' }}>Full Stack Developer
                at Xcelorn.nl</pre>
            <pre style={{ color: '#ffff',  fontSize:'14px', marginLeft: '81px' }}>Shubham Singh </pre>
        </div>
    )
}

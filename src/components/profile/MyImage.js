import React from 'react'
import './index.css'

export default function MyImage({ topPosition }) {
    return (
        <div className='profile-image-position' style={{ position: 'relative', left: '76vw', top: `${424 - topPosition}px` }}>
            <div className='my-image'>

            </div>
        </div>
    )
}

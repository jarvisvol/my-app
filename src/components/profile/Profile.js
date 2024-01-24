import React from 'react'
import './index.css'
// import profileimg from '../../images/profileimg.jpg';
import { Divider } from 'semantic-ui-react';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='uper-section'>
                <div className='profile-circle'>
                    <span className='position-text'>Full Stack Developer at Xcelorn.nl jjjjj</span>
                </div>
            </div>
            <Divider />
        </div>
    )
}

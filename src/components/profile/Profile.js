import React, { useRef, useState } from 'react';
import './index.css'
// import { Header } from 'semantic-ui-react'
import MyImage from './MyImage';
import Resume from './Resume';

export default function Profile() {
    const scrollContainerRef = useRef(null);
    const [first, setfirst] = useState('')
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollTopValue = scrollContainerRef.current.scrollTop;
        setfirst( scrollTopValue);
        // You can now use the scrollTopValue as needed
      }
    };

    return (
        <div className='profile-container-1' ref={scrollContainerRef} onScroll={handleScroll}>
            <div className='profile-container' style={{backgroundPosition: `0 ${first > 0 ? -(first+1)*2 : 1}px`}}>
            <MyImage topPosition={first}/>
            </div>
            <Resume/>
        </div>
    )
}

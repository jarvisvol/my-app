import React, { useRef, useState } from 'react';
import './index.css'
import MyImage from './MyImage';
import Resume from './Resume';

export default function Profile() {

  // useEffect(() => {

  // })

  const scrollContainerRef = useRef(null);
  const [first, setfirst] = useState('')
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollTopValue = scrollContainerRef.current.scrollTop;
      setfirst(scrollTopValue);
      // You can now use the scrollTopValue as needed
    }
  };

  return (
    <div className='profile-container-1' ref={scrollContainerRef} onScroll={handleScroll}>
      {/* <div class="ui segment">
        <p></p>
        <div class="ui active dimmer">
          <div class="ui loader"></div>
        </div>
      </div> */}

      <div className='profile-container' style={{ backgroundPosition: `0 ${first > 0 ? -(first + 1) * 2 : 1}px` }}>
        <MyImage topPosition={first} />
      </div>
      <Resume />
    </div>
  )
}

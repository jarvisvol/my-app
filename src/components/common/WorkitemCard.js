import React from 'react'
import { useDrag } from 'react-dnd'

export default function WorkitemCard({ itemDetails }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'wi',
    item: { ...itemDetails },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  return (
    <div ref={drag} className='work-item-card' 
      style={{
        height: '30px', width: '200px', opacity: isDragging ? 0.5 : 1, cursor: 'move'
      }} 
    >
      {itemDetails.name}
    </div>
  )
}

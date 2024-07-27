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
         width: '200px', opacity: isDragging ? 0.5 : 1, cursor: 'move'
      }} 
    >
      <div style={{fontWeight: "700", fontSize:'15px'}}>Name</div>
      {itemDetails.name}
      <div style={{fontWeight: "700", fontSize:'15px'}}> Description</div>
      <span>{itemDetails.description}</span>
    </div>
  )
}

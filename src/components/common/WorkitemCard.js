import React from 'react'
import { useDrag } from 'react-dnd'

export default function WorkitemCard({id}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'wi',
        item: {id: id},
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
      }))
  return (
    <div ref={drag} className='work-item-card' style={{border: '1px solid black', height:'30px', width:'200px', opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',}}>WorkitemCard</div>
  )
}

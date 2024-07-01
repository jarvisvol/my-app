import React from 'react'
import { useDrop } from 'react-dnd'

export default function Square({x, y,handleSqaureClick, black, children}) {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept:'KNIGHT',
      drop: () => handleSqaureClick(x, y),
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }),
    [x, y]
  )
    const fill = black ? 'black' : 'white'
     const stroke = black ? 'white' : 'black'
  return (
    <div ref={drop} style={{backgroundColor: fill, height: "100px", width: '100%', color:stroke}}>{children}</div>
  )
}

import React from 'react'
import { useDrop } from 'react-dnd'


export default function PhaseContainer({title, children, x, y, setSamas, samss}) {
    const [{ isOver}, drop] = useDrop(() => ({
        accept: 'wi',
        drop: (item) => moveWi(x, y, item),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      }), [x, y])

      const moveWi = (x, y, item) => {
        // const res = getItem()
        // samss.map(item => item.dashboardPhaseId == x )
        console.log(x,y,item,"lllllllllllllll");
      }

  return (
    <div ref={drop} className='phase-container'>
       <div style={{textAlign:'center',height: '30px', width: '100%', borderBottom: '1px solid', fontWeight:500, fontSize:'17px'}}>
        {title}
       </div>

       {children}
    </div>
  )
}

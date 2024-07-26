import React from 'react'
import { useDrop } from 'react-dnd'


export default function PhaseContainer({title, children, x, y, setParsedWorkItems, parsedWorkItems, updateWorkitemPhase}) {
  const [{ isOver}, drop] = useDrop(() => ({
      accept: 'wi',
      drop: (item) => moveWi(x, y, item),
      collect: monitor => ({
        isOver: !!monitor.isOver(),
      }),
    }), [x, y])

    const moveWi = (x, y, item) => {
      const arr = parsedWorkItems.map((wi) => {
        if (wi.id === item.id){
          wi.dashboard_phase_id = x
        }
        return wi;
      })
      setParsedWorkItems(arr);
      console.log(item);
      updateWorkitemPhase({id: item.id, dashboard_phase_id: x, name: item.name, description: item.description});
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

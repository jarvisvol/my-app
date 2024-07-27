import React from 'react'
import { useDrop } from 'react-dnd'


export default function PhaseContainer({title, children, dashboard_phase_id, setParsedWorkItems, parsedWorkItems, updateWorkitemPhase}) {
  const [{ isOver}, drop] = useDrop(() => ({
      accept: 'wi',
      drop: (item) => moveWi(dashboard_phase_id, item),
      collect: monitor => ({
        isOver: !!monitor.isOver(),
      }),
    }), [dashboard_phase_id])

    const moveWi = (dashboard_phase_id, item) => {
      const arr = parsedWorkItems.map((wi) => {
        if (wi.id === item.id){
          wi.dashboard_phase_id = dashboard_phase_id
        }
        return wi;
      })
      setParsedWorkItems(arr);
      updateWorkitemPhase({id: item.id, dashboard_phase_id: dashboard_phase_id, name: item.name, description: item.description});
    }

  return (
    <div ref={drop} className='phase-container' style={{width: title === "Unassigned" ? '33%' : '22%'}}>
       <div style={{textAlign:'center',height: '30px', width: '100%', borderBottom: '1px solid', fontWeight:500, fontSize:'17px'}}>
        {title}
       </div>

       {children}
    </div>
  )
}

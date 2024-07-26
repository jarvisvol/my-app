import React, { useEffect, useState } from 'react'
import './index.css'
import PhaseContainer from '../../../components/common/PhaseContainer';
import WorkitemCard from '../../../components/common/WorkitemCard';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function Dashboard({phases, getPhasesList, getWorkitemList, status, workitems, updateWorkitemPhase}) {
  const [pasedPhases, setPhases] = useState([]);
  
  const [parsedWorkItems, setParsedWorkItems] = useState([])

  useEffect(() => {
    getPhasesList();
    getWorkitemList();
  },[])

  useEffect(() => {
    switch (status) {
      case 'GET_PHASES_LIST_SUCCESS':
        console.log(phases,"llplplppl");
        var samArr = [];
        phases?.map((item) => {
         return samArr.push({
            text: item.name,
            value: item.id,
            ...item
          })
        })

        setPhases(samArr);
        
        break;
      case 'GET_WORKITEM_LIST_SUCCESS':
        // console.log(phases,"llplplppl");
        var samArr1 = [];
        workitems?.map((item) => {
         return samArr1.push({
            text: item.name,
            value: item.id,
            ...item
          })
        })

        setParsedWorkItems(samArr1);
        break;
      default:
        break;
    }
  }, [status])

  return (
    <DndProvider backend={HTML5Backend}>
    <div style={{display:'flex'}}>
      <div className='backlog-container' >
          {/* {
           samss.map((item, k) => (
            <WorkitemCard x={item} y={k} key={k}/>
           ))
          } */}
          
      </div>
      <Backlog pasedPhases={pasedPhases} parsedWorkItems={parsedWorkItems} setParsedWorkItems={setParsedWorkItems} updateWorkitemPhase={updateWorkitemPhase}/>
    </div>
    </DndProvider>
  )
}

function Backlog({pasedPhases, parsedWorkItems, setParsedWorkItems, updateWorkitemPhase}){
  return(
    <>
      {
        pasedPhases?.map((item, k) => (
          <PhaseContainer key={k} title={item.name} x={item.id} y = {item.name} setParsedWorkItems={setParsedWorkItems} parsedWorkItems={parsedWorkItems} updateWorkitemPhase={updateWorkitemPhase} >
            <div className='wi-container'>
            {
              parsedWorkItems?.map((itemY, j) => (
              item.id == itemY.dashboard_phase_id ? <WorkitemCard itemDetails={itemY} x={itemY} y={j} key={j}/> : null
              ))
            } 
            </div>
          </PhaseContainer>
        ))
      }
    </>
  )
}

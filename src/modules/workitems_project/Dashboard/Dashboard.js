import React, { useEffect, useState } from 'react'
import './index.css'
import PhaseContainer from '../../../components/common/PhaseContainer';
import WorkitemCard from '../../../components/common/WorkitemCard';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function Dashboard({phases, getPhasesList, isLoading, status}) {
  const [samss, setSamss] = useState([{name:"shubham", dashBoardPhaseId:1, id:23},{name:"shubham", dashBoardPhaseId:2, id:44},{name:"shubham", dashBoardPhaseId:2, id:33},{name:"shubham", dashBoardPhaseId:2, id3:2}]) 
  const [pasedPhases, setPhases] = useState([]);

  useEffect(() => {
    getPhasesList();
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
      <Backlog pasedPhases={pasedPhases} samss={samss} setSamss={setSamss}/>
    </div>
    </DndProvider>
  )
}

function Backlog({pasedPhases, samss, setSamss}){
  return(
    <>
      {
        pasedPhases?.map((item, k) => (
          <PhaseContainer key={k} title={item.name} x={item.id} y = {item.name} setSamss={setSamss} samss={samss} >
            <div>
            {
            samss.map((itemY, j) => (
             item.id == itemY.dashBoardPhaseId ? <WorkitemCard id={itemY.id} x={itemY} y={j} keyj={j}/> : null
            ))
           } 
            </div>
           </PhaseContainer>
        ))
      }
    </>
  )
}

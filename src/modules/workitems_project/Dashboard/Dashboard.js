import React, { useEffect, useState } from 'react'
import './index.css'
import PhaseContainer from '../../../components/common/PhaseContainer';
import WorkitemCard from '../../../components/common/WorkitemCard';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Dimmer, Loader } from 'semantic-ui-react';

export default function Dashboard({phases, getPhasesList, getWorkitemList, status, workitems, updateWorkitemPhase, isLoading}) {
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
        samArr.push({
          name: "Unassigned",
          value: "Unassigned",
          id:null
          
        })
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
      case 'UPDATE_WORKITEM_PHASE_SUCCESS':
        getWorkitemList();
        break;
      case 'CREATE_WORKITEM_SUCCESS':
      getWorkitemList();
      default:
        break;
    }
  }, [status])

  return (
    <DndProvider backend={HTML5Backend}>
      
      <Dimmer active={isLoading}> <Loader active={isLoading}></Loader> </Dimmer>
    <div style={{display:'flex'}}>
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
          <PhaseContainer key={k} title={item.name} dashboard_phase_id={item.id} setParsedWorkItems={setParsedWorkItems} parsedWorkItems={parsedWorkItems} updateWorkitemPhase={updateWorkitemPhase} >
            <div className='wi-container'>
            {
              parsedWorkItems?.map((itemY, j) => (
              item.id == itemY.dashboard_phase_id ? <WorkitemCard itemDetails={itemY} key={j}/> : null
              ))
            } 
            </div>
          </PhaseContainer>
        ))
      }
    </>
  )
}

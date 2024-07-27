import React, { useState } from 'react'
import { Input, Modal, Label, Button } from 'semantic-ui-react'

export default function CreateWiModal({createWorkItem}) {

    const [formObj, setformObj] = useState({
        name:"",
        description: ""
    })

    const resetvalues = () => {
        setformObj({
            name:"",
            description: ""
        })
    }

    const createWihandler=()=>{
        if(!formObj.name.length || !formObj.description.length){
            
        }
    }


    return (
        <Modal
            trigger={<Button>Create Work Item</Button>}
            header='Create Work Item'
            content={
                <div style={{ padding: "10px" }}>
                    <Label> Name: </Label>
                    <Input value={formObj.name} onChange={(e)=> setformObj({...formObj, name: e.target.value})} type='text' style={{ marginLeft: "10px" }} placeholder="Enetr the name of workitem" />
                    <br />
                    <div style={{ marginTop: "6px" }}>
                        <Label>Discription: </Label>
                        <Input value={formObj.description} onChange={(e)=> setformObj({...formObj, description: e.target.value})} type='text' style={{ marginLeft: "10px" }} placeholder="Enetr the Description" />
                    </div>
                    {
                        formObj.name.length || formObj.description.length ? <span style={{cursor:"pointer", color:"blue"}} onClick={() => resetvalues()}>Reset</span> : ""
                    }
                </div>
            }
            actions={[{ key: 'Cancel', content:"cancel" }, { key: 'Create', content: 'Create', positive: true, onClick: () => createWorkItem(formObj) }]}
        />
    )
}

import React from 'react'
import {mybullet, skills} from '../utils/constants/contants.js'
import { Divider } from 'semantic-ui-react'

export default function Resume() {
    const projectArr = ['project-1', 'project-2', 'project-3', 'project-4', 'project-6'];
    return (
        <div style={{ marginTop: '100px', textAlign: 'center' }}>
            <div >
                <span style={{ width: '110px', height: '1px', borderTop: '1px solid black' }}>

                </span>
                <pre style={{ fontSize: '16px', fontWeight: 'bold', color: '#fffff', marginLeft:'154px' }}><h2> My Journey</h2></pre>
                <div style={{ width: '390px', height: '1px', borderTop: '1px solid black', position: 'relative', left:'43vw' }}>

                </div>
                {/* <Divider /> */}
            </div>
            <br></br>
            <div>
                <pre style={{margin:'auto', width: 'fit-content', position: 'relative', left:'44px'}}>
                    <p>I'm a Forbes 30 Under 30 creator and entrepreneur dedicated to building technologies and <br /> empowering people who are laying the foundation for a Golden Age for humanity.</p>
                </pre>
            </div>

            <div style={{ display: 'flex' }}>
                <div className='experince-tag'>
                    <h4>Experince</h4>
                    <b>Agile Cockpit Software Pvt Ltd- Technical Developer</b>
                    <pre>Gurugram India</pre>
                    <i>12/22- current</i>
                    <div style={{ marginTop: '103px' }}>
                        <pre><h4><b>Live Projects</b></h4></pre>
                        {
                            projectArr?.map((item) => (
                                <pre style={{cursor:'pointer'}}><a>{item}</a></pre>
                            ))
                        }
                    </div>
                    
                </div>
                <div style={{position:'relative', left:'64vw', height:'130px', borderLeft:'1px solid black', marginTop:'39px', paddingLeft:'60px'}}>
                        <pre><h4><b>Skills</b></h4></pre>
                        <div>
                        {
                            skills?.map((item) => (
                                <span style={{cursor:'pointer'}}><span className='skills-tag'>{`${item} `}</span></span>
                            ))
                        }
                        </div>
                    </div>
                <div style={{position:'relative', left:'-213px'}}>
                    <pre style={{ marginLeft: ' 20px' }}><h6 >Summary</h6></pre>
                    {

                        mybullet?.map((item, i) => (
                            <pre key={i}> {item}</pre>
                        ))
                    }
                </div>
            </div>


        </div>
    )
}

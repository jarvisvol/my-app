import React from 'react'
import {mybullet, skills} from '../utils/constants/contants.js'

export default function Resume() {
    const projectArr = ['Data Visulization', 'car book app', 'project-3', 'project-4', 'project-6'];

    const downloadAPK = (i) =>{
        if(i==1){
            const apkUrl = '/var/www/html/my-app.apk';
   	 		const link = document.createElement('a');
    		link.href = apkUrl;
    		link.download = 'your_app_name.apk';
    		document.body.appendChild(link);
   			link.click();
    		document.body.removeChild(link);
        }
    }
    return (
        <div style={{ marginTop: '100px', textAlign: 'center' }}>
            <div >
                <span style={{ width: '110px', height: '1px', borderTop: '1px solid black' }}>

                </span>
                <pre style={{ fontSize: '16px', fontWeight: 'bold', color: '#fffff', marginLeft:'154px' }}><h2> My Journey</h2></pre>
                <div style={{ width: '390px', height: '1px', borderTop: '1px solid black', position: 'relative', left:'43vw' }}>

                </div>
            </div>
            <br></br>
            <div>
                <pre style={{margin:'auto', width: 'fit-content', position: 'relative', left:'44px'}}>
                    <p>
                     Hey, I'm Shubham Singh Dynamic Full Stack Developer with a passion<br/> for crafting innovative and efficient solutions in web development.
                     With a solid foundation in both <br/> front-end and back-end technologies, seamlessly navigates the complexities of modern software development <br/> to create robust and user-friendly applications.
                      Armed with extensive knowledge of <br/> programming languages such as JavaScript, Python, and NodeJS.
                    </p>
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
                            projectArr?.map((item, i) => (
                                <pre onClick={(i)=>downloadAPK()} style={{cursor:'pointer'}}><a href={`/match-data`}>{item}</a></pre>
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

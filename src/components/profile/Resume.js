import React from 'react'
import { mybullet, skills } from '../utils/constants/contants.js'
import { Link } from "react-router-dom";

export default function Resume() {
    const projectArr = ['Data Visulization', 'car book app', 'work-managment-system', 'project-4', 'project-6'];

    const downloadAPK = () => {
        const apkUrl = process.env.PUBLIC_URL + '/APK_folder/app-release.apk';
        const link = document.createElement('a');
        link.href = apkUrl;
        link.download = 'app-release.apk';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div style={{ marginTop: '100px', textAlign: 'center' }}>
            <div >
                <span style={{ width: '110px', height: '1px', borderTop: '1px solid black' }}>

                </span>
                <span className='my-jounery-tag' style={{ fontSize: '16px', fontWeight: 'bold', color: '#fffff', marginLeft: '154px' }}><h2>My Journey </h2></span>
                <div className='boder-of-jurney-tag' style={{ width: '390px', height: '1px', borderTop: '1px solid black', position: 'relative', left: '39vw' }}>

                </div>
            </div>
            <br></br>
            <div>
                <span style={{ margin: 'auto' }}>
                    <p style={{paddingLeft: '10px', paddingRight: '14px'}}>
                        Hey, I'm Shubham Singh Dynamic Full Stack Developer with a passion for crafting innovative and efficient solutions in web development.
                        With a solid foundation in both  front-end and back-end technologies, seamlessly navigates the complexities of modern software development  to create robust and user-friendly applications.
                        Armed with extensive knowledge of  programming languages such as JavaScript, Python, and NodeJS.
                    </p>
                </span>
            </div>

            <div className='whole-resum-container' style={{ display: 'flex' }}>
                <div className='experince-tag'>
                    <h4>Experince</h4>
                    <b>Agile Cockpit Software Pvt Ltd- Technical Developer</b>
                    <span style={{marginLeft:'5px'}}>Gurugram India </span>
                    <i>05/22- current</i>
                    <div className='project-list-container' style={{ marginTop: '103px' }}>
                        <span><h4><b>Live Projects</b></h4></span>
                        {
                            projectArr?.map((item, i) => (
                                <div key={i} style={{ cursor: 'pointer' }}> { 
                                    i === 0 ? <Link to={'/match-data'} > {item} </Link>
                                    : item === "work-managment-system" ? <Link to={'/workitems'} > {item} </Link> :
                                    <span style={{textDecoration:'underline', color: 'blue', cursor: 'pointer', paddingTop: '5px'}} onClick={() => downloadAPK()} > {item} </span>
                                } </div>
                            ))
                        }
                    </div>

                </div>
                <div className='skills-wala-container' style={{ position: 'relative', left: '71vw', height: '130px', marginTop: '39px', paddingLeft: '60px' }}>
                    <span><h4><b>Skills</b></h4></span>
                    <div>
                        {
                            skills?.map((item,i) => (
                                <span key={i} style={{ cursor: 'pointer' }}><span className='skills-tag'>{`${item} `}</span></span>
                            ))
                        }
                    </div>
                </div>
                <div className='summuray-container' style={{ position: 'relative', left: '-213px' }}>
                    <span style={{ marginLeft: ' 20px' }}><h6 >Summary</h6></span>
                    {

                        mybullet?.map((item, i) => (
                            <span key={i} style={{display:'inline-block'}}> {item}</span>
                        ))
                    }
                </div>
            </div>


        </div>
    )
}

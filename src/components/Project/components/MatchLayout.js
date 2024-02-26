import React from 'react'
import {cricketMatches} from '../../utils/constants/contants.js'
import PopulerMatchCard from './PopulerMatchCard.js';
import MyMatchData from './MyMatchData.js'

const matchList = [1, 2, 3, 45, 6, 7, 8, 9];

export default function MatchLayout() {
    console.log(cricketMatches);
    return (
        <div style={{ display: 'flex',   }}>
            <div className='left-container'>
                {
                    matchList?.map((item) => (
                        <div className='match-list-div'>
                            <ul>
                                <li>
                                    matchname
                                </li>
                            </ul>
                        </div>
                    ))
                }
            </div>
            <div className='papuler-matches' style={{display:'-webkit-box', overflow:'auto', width:'78%', marginLeft:'12px', boxShadow:'1px 5px 14px', height:'129px', marginTop:'14px'}}>
                <p style={{margin:'auto', padding:'11px'}}>Populer Matches :</p>
                {
                    cricketMatches?.map((item, key) => (
                        <PopulerMatchCard key={key} team={item.Teams} date={item.Date} highlight={item.Highlights}/>
                    ))
                }
            </div>
            <div className='match-graph-container'>
                <MyMatchData/>
            </div>
        </div>
    )
}

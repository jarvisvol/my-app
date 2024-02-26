import React from 'react'

export default function PopulerMatchCard({team,date, highlight}) {
    return (
        <div className='puplermatch-card' style={{ height: '85px', width: '300px', border: "1px solid black", boxShadow: '1px 1px 5px #1175cb', margin: "5px 10px", background: 'honeydew', padding:'5px 8px' }}>
            <div>
                <span className='heading-of-team-card'>Teams:</span> <span className='text-of-populer-card' style={{ textDecoration: 'underline' }}>{team}</span>
            </div>
            <div>
                <span className='heading-of-team-card'>Date: </span> <span className='text-of-populer-card'>{date}</span>
            </div>
            <div>
                <span className='heading-of-team-card'>Highlights: </span><span className='text-of-populer-card'>{highlight}</span>
            </div>
        </div>
    )
}

import React from 'react'

const matchList = [1, 2, 3, 45, 6, 7, 8, 9];

export default function MatchLayout() {
    return (
        <div>
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
        </div>
    )
}

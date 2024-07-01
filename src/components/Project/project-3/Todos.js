// import React, { useState } from 'react'
// import axios from 'axios';

// export default function Todos() {
//   const [img, setImg] = useState({});
//   function handleChange (e) {
//     console.log(e.target.files);
//     setImg(URL.createObjectURL(e.target.files[0]));
//   }
//   const uploadPic = async(e) => {
//     e.preventDefault()
//     const formData = new FormData()
//     formData.append('image', img)
//     console.log(formData);
//     const res = await axios.post('http://localhost:4000/api/employee/add-employee', formData)
//     console.log(res);
//   }
//   return (
//     <div>
//         <div className='todo-container'>
//             <div>
//               hi upload
//             </div>
//             <form onSubmit={(e) => {uploadPic(e)}}>
//             <input type='file' onChange={handleChange}/>
//             <image src={img}/>
//             <button>upload</button>
//             </form>
//         </div>
//     </div>
//   )
// }
import React from 'react'
import Knight from './Knight'
import Square from './Square'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function renderSquare(i, [knightX, knightY], handleSqaureClick) {
  const x = i % 8
  const y = Math.floor(i / 8)
  const isKnightHere = x === knightX && y === knightY
  const black = (x + y) % 2 === 1
  const piece = isKnightHere ? <Knight /> : null

  return (
    <div key={i} onClick={() => {handleSqaureClick(x,y);}} style={{ width: '12.5%', height: '12.5%' }}>
      <Square x= {x} y = {y} handleSqaureClick={handleSqaureClick} black={black}>{piece}</Square>
    </div>
  )
}

export default function Todos({knightPosition, handleSqaureClick}) {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition, handleSqaureClick))
  }
  return (
    <DndProvider backend={HTML5Backend}>
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      {squares}
    </div>
    </DndProvider>
  )
}

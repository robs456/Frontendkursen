import React, { useState } from 'react'



export const BookInfo = ({book}) => {

    const [wantDark, setWantDark] = useState(false)

  return (
    <div className={`book ${wantDark ? 'bookDark' : ''}`} onClick={()=> setWantDark(!wantDark)}>
    {/* <div className="book"> */}
            <div className="bookHeader">
            <h2>{book.title}</h2>
            <div className="info">
               <p><strong>Author:</strong> {book.author}</p>
               <p><strong>Grade:</strong> {book.grade}</p> 
            </div>
            </div>
             <article>{book.body}</article>
           
        </div>
        // </div>
  )
}

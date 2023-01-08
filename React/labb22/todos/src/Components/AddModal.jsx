import { useState } from "react"
import React from 'react'

export const AddModal = ({ setShowAddModal, addItem}) => {


    const [text, setText] = useState('')
    

  return (
    <div className="modalContainer">
        <div className="modal">
            <header>
                <h3 className="modalTitle">Please enter a Todo:</h3>
            </header>
            <div className="modalBody">
                <input type="text" name="editInput" className="editInput" placeholder='Todo'value={text} onChange={e => setText(e.target.value)}/>
                

                <div className="modalButtons">
                    <button className="submit modalButton" onClick={() => addItem(text)}>Submit</button>
                    <button className="cancel modalButton" onClick={() => setShowAddModal(false)}>Cancel</button> 
                </div>

            </div>


        </div>

    </div>
  )
}

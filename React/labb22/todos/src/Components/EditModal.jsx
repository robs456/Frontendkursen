import React, {useState} from 'react'

export const EditModal = ({todoToEdit, setShowEditModal, changeTodo}) => {

    const [newTitle, setNewTitle] = useState(todoToEdit.current.title)

  return (
    <div className="modalContainer">
        <div className="modal">
            <header>
                <h3 className="modalTitle">Please edit your Todo:</h3>
            </header>
            <div className="modalBody">
                <input type="text" name="editInput" className="editInput" value={newTitle} onChange={e => setNewTitle(e.target.value)}/>
                

                <div className="modalButtons">
                    <button className="submit modalButton" onClick={() => changeTodo(newTitle, todoToEdit.current.id)}>Submit</button>
                    <button className="cancel modalButton" onClick={() => setShowEditModal(false)}>Cancel</button> 
                </div>

            </div>


        </div>

    </div>
  )
}

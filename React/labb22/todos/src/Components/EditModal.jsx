import React from 'react'

export const EditModal = ({todoToEdit, setShowEditModal}) => {

    // console.log(todoToEdit)
    // // let {title,  id} = todoToEdit
    // console.log(todoToEdit.title)
    // console.log(todoToEdit.id)
    // // todoToEdit.title = 'try harder'
    // console.log(todoToEdit.title)
  return (
    <div className="modalContainer">
        <div className="modal">
            <header>
                <h3 className="modalTitle">Please edit your Todo:</h3>
            </header>
            <div className="modalBody">
                <input type="text" name="editInput" className="editInput" placeholder='Todo'/>
                

                <div className="modalButtons">
                    {/* <button className="submit modalButton" onClick={() => changeTodo(id, title)}>Submit</button> */}
                    <button className="cancel modalButton" onClick={() => setShowEditModal(false)}>Cancel</button> 
                </div>

            </div>


        </div>

    </div>
  )
}

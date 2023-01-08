import React from 'react'

export const NukeModal = ({deleteList, setShowNukeModal}) => {

  return (
    <div className="modalContainer">
        <div className="modal">
            <header>
                <h3 className="modalTitle">Do you want to remove all todos?</h3>
            </header>
            <div className="modalBody">                

                <div className="modalButtons">
                    <button className="submit modalButton" onClick={() => deleteList()}>Yes</button>
                    <button className="cancel modalButton" onClick={() => setShowNukeModal(false)}>No</button> 
                </div>

            </div>


        </div>

    </div>
  )
}

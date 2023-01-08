import React from 'react'

const Header = ({setShowNukeModal, setShowAddModal}) => {
  return (
    <div className="header">
        <h1 className="mainTitle">Things to do</h1>
        <div className="buttons">
        <button className="add" onClick={() => setShowAddModal(true)}>Add item</button>
        <button className="deleteAll" onClick={() => setShowNukeModal(true)}>Delete all</button>

        </div>
    </div>
    
  )
}

export default Header 
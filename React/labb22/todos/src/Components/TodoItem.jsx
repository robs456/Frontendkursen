import React from 'react'

const TodoItem = ({todo, completedToggle, editItem, deleteItem }) => {

    const {title, completed, id} = todo
  return (
   
    <div className="todoItem" >
        <p className= {`itemText ${completed ? 'completed' : ''}`} onClick={() => completedToggle(id)}>{title}</p>
        <div className="icons">
            <p><i className="uil uil-pen" onClick={() => editItem(todo)}></i></p>        
            <p><i className="uil uil-trash-alt" onClick={() => deleteItem(id)}></i></p>
        </div>
    </div>


  )
}

export default TodoItem
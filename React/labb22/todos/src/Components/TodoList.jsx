import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, completedToggle, editItem, deleteItem, setShowEditModal }) => {
  return (
    <div className="todoList">
        {!todos && <p className="emptyList">Congrats, there's nothing to do!</p>}
        { todos && todos.map( todo => 
        <TodoItem todo={todo} key={todo.id} 
        completedToggle={completedToggle}
        editItem={editItem}
        deleteItem={deleteItem}  
           
        /> )}

        
    </div>
  )
}

export default TodoList
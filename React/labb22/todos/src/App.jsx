import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import TodoList from './Components/TodoList'
import TodoItem from './Components/TodoItem'
import { EditModal } from './Components/EditModal'
import { NukeModal } from './Components/NukeModal'
import { AddModal } from './Components/AddModal'


function App() {
  const [todos, setTodos] = useState([
    {title: 'Wag the dog', completed : false, id: 1},
    {title: 'trash', completed : true, id: 2},
    {title: 'dishes', completed : false, id: 3},
    {title: 'yo mama', completed : false, id: 4}
  ])

  const [showEditModal, setShowEditModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showNukeModal, setShowNukeModal] = useState(false)
  const [todoToEdit, setTodoToEdit] = useState()


  const completedToggle = (id) => {
    
    setTodos(prevState => {
      return prevState.map(todo => todo.id === id ? {...todo, completed: !todo.completed } : todo)})
  } 

  const deleteList = () => {
    setTodos([])
    setShowNukeModal(false)
  }

  const addItem = (item) => {
    console.log(item)
  
    setTodos(prevState => {
      return [...prevState, { id: crypto.randomUUID(), completed: false, title: item }]
    })
  
  }
  const editItem = (todo) =>{
    console.log(todo.id)
    setTodoToEdit(todo)
    // const todo1=todo
    // // setTodoToEdit(todo)
    console.log(todoToEdit)
    // console.log(todo1)
    setShowEditModal(true)   
  }
  const deleteItem = (id) => {
    
    setTodos(prevState => {
      return prevState.filter(todo => todo.id !== id)})
  } 

  return (
    <div className="App">
      <div className="container">
        <Header  setShowNukeModal={setShowNukeModal} setShowAddModal={setShowAddModal}/>
        <TodoList todos={todos} completedToggle={completedToggle}
        editItem={editItem} 
        deleteItem={deleteItem}/>
      </div>
      {showEditModal && <EditModal setShowEditModal={setShowEditModal} todoToEdit={todoToEdit}/>}
      {showNukeModal && <NukeModal setShowNukeModal={setShowNukeModal} deleteList={deleteList}/>}
      {showAddModal && <AddModal setShowAddModal={setShowAddModal} addItem={addItem}/>}
    </div>
  )
}

export default App 


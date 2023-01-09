import { useState, useRef, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import TodoList from './Components/TodoList'
import { EditModal } from './Components/EditModal'
import { NukeModal } from './Components/NukeModal'
import { AddModal } from './Components/AddModal'


function App() {

  // For troubleshooting or demo:
  // const [todos, setTodos] = useState([
  //   {title: 'Wag the dog', completed : false, id: 1},
  //   {title: 'trash', completed : true, id: 2},
  //   {title: 'dishes', completed : false, id: 3},
  //   {title: 'yo mama', completed : false, id: 4}
  // ])

  const [todos, setTodos] = useState([])

  const [showEditModal, setShowEditModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showNukeModal, setShowNukeModal] = useState(false)
  const todoToEdit = useRef({})


  const completedToggle = (id) => {
    
    setTodos(prevState => {
      return prevState.map(todo => todo.id === id ? {...todo, completed: !todo.completed } : todo)})
  } 

  const deleteList = () => {
    setTodos([])
    setShowNukeModal(false)
  }

  const addItem = (item) => {  
    setTodos(prevState => {
      return [...prevState, { id: crypto.randomUUID(), completed: false, title: item }]
    })

    setShowAddModal(false)
  }
  const editItem = (todo) =>{
    
    
    todoToEdit.current = todo
    
   
    setShowEditModal(true)   
  }

  const changeTodo = (newTitle, id) => {
    
    setTodos(prevState => {
      return prevState.map(todo => todo.id === id ? {...todo, title: newTitle } : todo)})
    
      setShowEditModal(false)  
    
  } 

  const deleteItem = (id) => {
    
    setTodos(prevState => {
      return prevState.filter(todo => todo.id !== id)})
  } 

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todoList'))
    if(storedTodos && storedTodos.length) {
      setTodos(storedTodos)
    }
  }, [])

  
  useEffect(() => {
    
      localStorage.setItem('todoList', JSON.stringify(todos))
   
  }, [todos])

  return (
    <div className="App">
      <div className="container">
        <Header  setShowNukeModal={setShowNukeModal} setShowAddModal={setShowAddModal}/>
        <TodoList todos={todos} completedToggle={completedToggle}
        editItem={editItem} 
        deleteItem={deleteItem}/>
      </div>
      {showEditModal && <EditModal setShowEditModal={setShowEditModal} todoToEdit={todoToEdit} changeTodo={changeTodo} />}
      {showNukeModal && <NukeModal setShowNukeModal={setShowNukeModal} deleteList={deleteList}/>}
      {showAddModal && <AddModal setShowAddModal={setShowAddModal} addItem={addItem}/>}
    </div>
  )
}

export default App 


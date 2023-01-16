import { useState } from 'react'
import './App.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import Blogs from './Views/Blogs'
import BlogDetails from './Views/Blogs'
import CreateBlog from './Views/CreateBlog'

const loadBlogs = async () => {
  const res = await fetch('http://localhost:3000/blogs')
  if(!res.ok) {
    throw new Error('could not get the data')
  }
  const data = await res.json()
  return data
}

const loadDetails = async ({ params }) => {
  const { id } = params
  const res = await fetch('http://localhost:3000/blogs/' + id)
  if(!res.ok) {
    throw new Error('could not get the data')
  }
  const data = await res.json()
  return data
}

function App() {
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Blogs />,
        loader: loadBlogs
      },
      {
        path: "blog/:id",
        element: <BlogDetails />,
        loader: loadDetails
      },
      {
        path: "/create",
        element: <CreateBlog />
      }
    ]
  
  }
])
  return (
   <RouterProvider router={router} />
  )
}

export default App

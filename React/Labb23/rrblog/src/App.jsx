import { useState } from 'react'
import './App.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import Blogs from './Views/Blogs'
import BlogDetails from './Views/BlogDetails'
import CreateBlog, {handleFormSubmit} from './Views/CreateBlog'
import { ErrorPage } from './Views/ErrorPage'

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
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Blogs />,
        loader: loadBlogs
      },
      {
        path: ":id",
        element: <BlogDetails />,
        loader: loadDetails
      },
      {
        path: "/create",
        element: <CreateBlog />,
        action: handleFormSubmit
      }
    ]
  
  }
])
  return (
   <RouterProvider router={router} />
  )
}

export default App

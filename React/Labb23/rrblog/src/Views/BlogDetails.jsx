import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function BlogDetails() {

  const blog = useLoaderData()

  return (
    <div className="blogItem">
      <header className="blogHeader">
        <h2 className="blogTitle">{blog.title}</h2>
        <h3 className="blogAuthor"><strong>Author:</strong>{blog.author} </h3>
      </header>
      <p className="blogBody"> {blog.body}</p>
    
    </div>

  )
}

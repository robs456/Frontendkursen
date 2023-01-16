import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'


export default function Blogs() {

  const blogs = useLoaderData()

  return (

    blogs.map( blogitem =>  (

    <Link to={"/blog/" + blogitem.id} key={blogitem.id}>
    <div className="blogItem">
      <header className="blogHeader">
        <h2 className="blogTitle">{blogitem.title}</h2>
        <h3 className="blogAuthor"><strong>Author:</strong>{blogitem.author} </h3>
      </header>
      <p className="blogBody"> {blogitem.body.substring(0, 100)}...</p>
    
    </div>
    </Link>


    ))
  )
}

import React from 'react'
import { Form, redirect } from 'react-router-dom'

export default function CreateBlog() {
  return (
    <div className="formContainer">
          
      <div className="create">
              <h2>Add a new Blog post</h2>
              <Form method='post' action="/create">
                <label >Blog title:</label>
                <input
                type="text"
                required
                name='title'
                />

                <label >Blog body:</label>
                <textarea 
                required
                name='body'
                >
                
                </textarea>
                <label >Blog author:</label>
                <select 
                name='author'
                >
                  <option value="Mario">Mario</option>
                  <option value="Yoshi">Yoshi</option>
                </select>
                
                <button className='submitButton' type='submit'>Create post</button>

                </Form>
          </div> 

    </div>
  )
}

export const handleFormSubmit = async ({request}) => {

  const subData = await request.formData()
  
  const sendData = {
    title: subData.get('title'),
    body: subData.get('body'),
    author: subData.get('author'),
    id: crypto.randomUUID()
  }
   
   fetch('http://localhost:3000/blogs', {
    method:'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(sendData)
  })
  
  return redirect('/')
   
}

 
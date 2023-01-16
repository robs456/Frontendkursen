import React from 'react'

export default function CreateBlog() {
  return (
    <div className="formContainer">
          
      {/* <div className="create">
              <h2>Add a new Blog</h2>
              <form onSubmit={handleSubmit}>
                <label >Blog title:</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                
                />
                  <label >Blog body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                >
                
                </textarea>
                <label >Blog author:</label>
                <select 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                  <option value="mario">Mario</option>
                  <option value="yoshi">Yoshi</option>
                </select>
                { !isLoading && <button>Add Blog</button>}
                { isLoading && <button disabled>Adding Blog...</button>}
                {/* <p>{title}</p> */}

              {/* </form>
          </div> */} 

    </div>
  )
}

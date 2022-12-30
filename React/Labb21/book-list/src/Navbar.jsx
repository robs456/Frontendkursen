import React, { useState } from 'react'

export const Navbar = () => {

    const [loggedIn, setLoggedIn] = useState(false)

  return (
    <nav className="navbar">
        <h1>Rob's book suggestions</h1>
        
        { !loggedIn ? <button onClick={() => setLoggedIn(true) }>Log in</button> : <p>Robert</p>}

    </nav>
  )
}


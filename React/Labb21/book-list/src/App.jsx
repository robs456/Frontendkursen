import { useState } from 'react'

import './App.css'
import { BookList } from './BookList'
import { Navbar } from './Navbar'

function App() {

  const [books, setBooks] = useState([
        { title: 'A Book', body: 'A really great book, you should read it!', author: 'Iskal Oele', grade: 5, id: 1 },
        { title: 'Another Book', body: 'Another really great book, you should read it!', author: 'Iskal Oele', grade: 5, id: 2 },
        { title: 'Some Book', body: 'A so-so book, you should perhaps read it!', author: 'Si Saw', grade: 3, id: 3 },
        { title: 'Meh Book', body: 'A really quite crappy book, you should never read it!', author: 'Kannualt Ecrire', grade: 1, id: 4 },
        { title: 'Awesome Book', body: 'A really awesome book, you should read it!', author: 'Iskal Oele', grade: 5, id: 5 },
       
    ])

  
  return (
    <div className="App">
      <Navbar />
      <BookList books={books}/>
    </div>
  )
}

export default App

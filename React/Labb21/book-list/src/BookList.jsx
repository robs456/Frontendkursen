import React from 'react'
import { BookInfo } from './BookInfo'

export const BookList = ({books}) => {
  return (
    <div className="booklist">
        <h1>Book list</h1>
        {
           books &&  books.map(book => <BookInfo key={book.id} book={book} />)
        }


    </div>
  )
}

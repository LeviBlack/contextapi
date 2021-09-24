import React, {createContext, useState}from 'react'
import { v4 as uuid } from 'uuid'

export const BookContext = createContext();


const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'meditaions', author: 'marcus aurelius', id: uuid()},
        {title: 'The 48 Laws of Power', author: 'robert greene',  id: uuid() },
    ])
    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuid() }])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
        {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider

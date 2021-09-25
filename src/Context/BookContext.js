import React, {createContext, useState, useEffect}from 'react'
import { v1 as uuidv1 } from 'uuid';


export const BookContext = createContext();


const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Meditations ', author: 'Marcus Aurelius ', id: 2},
        {title: 'The 48 Laws of Power', author: 'Robert Greene', id: 1},
    ], () => {
        const localData = localStorage.getItem('books')
        return localData ? JSON.parse(localData) : []

    })
    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuidv1()}])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])


    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
        {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider

import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { BookContext } from '../Context/BookContext'
import BookDetails from './BookDetails'


const Booklist = () => {
    const {isLightTheme, light, dark } = useContext(ThemeContext)
    const {books} = useContext(BookContext)
    const theme = isLightTheme ? light : dark
    return books.length ? (
            <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
                {books.map(book => {
                    return(
                        (<BookDetails style={{ background: theme.ui }} book={ book } key={book.id}/>)
                        
                    )
                })}
            </div>  
    ) : (
        <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>No books to read. </div>
    )
}  

export default Booklist




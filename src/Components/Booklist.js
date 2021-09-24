import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { Card, CardContent } from '@material-ui/core'
import { BookContext } from '../Context/BookContext'
import BookDetails from './BookDetails'

const Booklist = () => {
    const {isLightTheme, light, dark, toggleTheme} = useContext(ThemeContext)
    const {books} = useContext(BookContext)
    const theme = isLightTheme ? light : dark
    return books.length ? (
        <Card className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                {books.map(book => {
                    return(
                        (<BookDetails style={{ background: theme.ui }} book={ book } key={book.id}/>)
                        
                    )
                })}
            </ul>
        </Card>    
    ) : (
        <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>No books to read. </div>
    )
}

export default Booklist




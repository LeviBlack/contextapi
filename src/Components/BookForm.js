import React, { useContext, useState }from 'react'
import { BookContext } from '../Context/BookContext'
import { ThemeContext } from '../Context/ThemeContext'
import { Button, Input, Box } from '@material-ui/core'
import Themetoggle from "../Components/Themetoggle";
 
 const NewBookForm = () => {
     const { addBook } = useContext(BookContext)
     const {isLightTheme, light, dark} = useContext(ThemeContext)
     const theme = isLightTheme ? light : dark
     const [title, setTitle] = useState('')
     const [author, setAuthor] = useState('')
     const handleSubmit = (e) => {
         e.preventDefault()
         addBook(title, author)
         setTitle('')
         setAuthor('')
     }
     return (
        <form className="input" style={{ background: theme.bg, color: theme.syntax}} onSubmit={handleSubmit}>
            <Input  style={{ background: theme.bg, color: theme.syntax}}type='text' placeholder='book title' value={title}
            onChange={(e) => setTitle(e.target.value)} required />
            <Input style={{ background: theme.bg, color: theme.syntax}} type='text' placeholder='book author' value={author}
            onChange={(e) => setAuthor(e.target.value)} required />
            <br/>
            <br/>
            <Box display="flex" justifyContent="space-between">
                <Themetoggle />
                <Button className='button' variant='outlined' style={{ fontSize: '11px', background: theme.ui, color: theme.syntax}} type='submit' value='add book'>Submit</Button>
            </Box>
        </form>
         
     )
 }
 
 export default NewBookForm
 
import React, { useContext} from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { BookContext } from '../Context/BookContext'


const Navbar = () => {
    const {books} = useContext(BookContext)
    const {isLightTheme, light, dark} = useContext(ThemeContext)

    const theme = isLightTheme ? light : dark
    return (
            <nav className='nav' style={{ background: theme.ui, color: theme.syntax}}>
                <h1>My Reading List</h1>
                <p>Currently you have {books.length} books in your queue!</p>
            </nav>
    )
}




export default Navbar


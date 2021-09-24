import React, { useContext} from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { Card } from '@material-ui/core'
import { AuthContext } from '../Context/AuthContext'
import { BookContext } from '../Context/BookContext'


const Navbar = () => {
    const {books} = useContext(BookContext)
    const {isLightTheme, light, dark} = useContext(ThemeContext)
    const { isAuthenticated, toggleAuth } = useContext(AuthContext)
    const theme = isLightTheme ? light : dark
    return (
        <Card>
            <nav style={{ background: theme.ui, color: theme.syntax}}>
                <h1>My Reading List</h1>
                <div onClick={toggleAuth}/>
                {isAuthenticated ? "Logged in" : "Logged out"}
                <p>Current you have {books.length} to get through.</p>
            </nav>
        </Card>
    )
}




export default Navbar


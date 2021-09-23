import React, {Component, useContext} from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { Card, CardContent } from '@material-ui/core'
import { AuthContext } from '../Context/AuthContext'


const Navbar = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    const { isAuthenticated, toggleAuth } = useContext(AuthContext)
    return (
        <Card>
            <nav style={{ background: theme.ui, color: theme.syntax}}>
                <h1>Context API App</h1>
                <div onClick={toggleAuth}>
                {isAuthenticated ? "Logged in" : "Logged out"}
                </div>
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
            </nav>
        </Card>
    )
}




export default Navbar


import React, {Component} from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { Card, CardContent } from '@material-ui/core'
import { AuthContext } from '../Context/AuthContext'




class Navbar extends Component {
    render() {
        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const {isAuthenticated, toggleAuth} = authContext
                    const { isLightTheme, light, dark } = themeContext
                    const theme = isLightTheme ? light : dark
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
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>
        )
    }
}

export default Navbar


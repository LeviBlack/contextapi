import React, {Component} from 'react'
import { ThemeContext } from '../Context/ThemeContext'



class Navbar extends Component {
    render() {
        return (
        <ThemeContext.Consumer>{(context) => {
        const { isLightTheme, light, dark } = context
        const theme = isLightTheme ? light : dark
            return (
            <nav style={{ background: theme.ui, color: theme.syntax}}>
                <h1>Context API App</h1>
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
            </nav>
            )
        }}</ThemeContext.Consumer>
        )
    }
}

export default Navbar


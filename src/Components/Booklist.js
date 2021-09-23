import React, { Component } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { Card, CardContent } from '@material-ui/core'

class Booklist extends Component {
    static contextType = ThemeContext
    render() {
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark
        return (
            <CardContent className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
                <ul>
                    <li style={{ background: theme.ui }}>The way of kings</li>
                    <li style={{ background: theme.ui }}>Berserk</li>
                    <li style={{ background: theme.ui }}>the name of the wind</li>
                </ul>
            </CardContent>    
            
        ) 
    }
       
}

export default Booklist

import React, { Component } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { Button } from '@material-ui/core'

class Themetoggle extends Component {
    static contextType = ThemeContext
    render() {
        
        const {toggleTheme} = this.context
        return ( 
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context
                const theme = isLightTheme ? light : dark
                    return(
                        <Button style={{ background: theme.ui, color: theme.syntax}} onClick={toggleTheme} variant='outlined' >Toggle the theme</Button>
                    )
            }}</ThemeContext.Consumer>
         ) 
    } 
}

export default Themetoggle

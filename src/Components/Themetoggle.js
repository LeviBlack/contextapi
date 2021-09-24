import React, { Component, useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { Button } from '@material-ui/core'


const Themetoggle = () => {
    const { isLightTheme, light, dark, toggleTheme} = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <Button style={{ background: theme.ui, color: theme.syntax}} onClick={toggleTheme} variant='outlined' >Toggle the theme</Button>
    )
}


export default Themetoggle

import React, {createContext, Component} from 'react'

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui:'#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#23272A', bg: '#2C2F33'}      
    }
    toggleTheme =() => {
        this.setState({ isLightTheme: !this.state.isLightTheme })
    }
    render() {
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
            {this.props.children}
            </ThemeContext.Provider>
        )
    }
}



export default ThemeContextProvider

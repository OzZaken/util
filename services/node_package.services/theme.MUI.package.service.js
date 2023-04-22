import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'


// Define your custom Material-UI theme
let theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif',
        ].join(','),
        h1: {
            fontFamily: 'Montserrat',
            fontWeight: 700,
            fontSize: '3.5rem',
            lineHeight: '1.2',
            letterSpacing: '-0.01562em',
        },
        h2: {
            fontFamily: 'Montserrat',
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: '1.2',
            letterSpacing: '-0.00833em',
        },
        // Add any additional typography styles here
    },
    spacing: 4, // Set default spacing between components
    shape: {
        borderRadius: 16, // Set default border radius for components
    },
})

// Make the font sizes responsive
theme = responsiveFontSizes(theme)

// Export the Material-UI theme as a service
export const MUI = {
    theme,
}


// ---------------------------------   Test   ---------------------------------  
import React from 'react'
// import { MUI } from './MUI.theme.service'
import { ThemeProvider } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

function App() {
    return (
        <ThemeProvider theme={MUI.theme}>
            <Button variant="contained" color="primary">
                Hello, Material-UI!
            </Button>
        </ThemeProvider>
    )
}

export default App

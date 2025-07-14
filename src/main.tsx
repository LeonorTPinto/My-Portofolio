import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline,ThemeProvider } from '@mui/material'
import { Css } from '@mui/icons-material'
import theme from './theme.ts'
import ReactDOM from 'react-dom/client'


ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
       <ThemeProvider theme={theme}>

        <CssBaseline />
        <App />
        
       </ThemeProvider>
       
       
       </React.StrictMode>,

)
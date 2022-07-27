import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import themeLayout from './themeLayout'

export default function ThemeProviderLayout({ children }) {

  return (
    <ThemeProvider theme={themeLayout}>
      {children}
    </ThemeProvider>
  )
}

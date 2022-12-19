import React from 'react'

const ThemeContext = React.createContext({
  darkTheme: false,
  updateTheme: () => {},
})

export default ThemeContext

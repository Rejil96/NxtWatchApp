import React from 'react'

const ThemeContext = React.createContext({
  darkTheme: false,
  savedVideos: [],
  updateTheme: () => {},
  onSavedVideos: () => {},
})

export default ThemeContext

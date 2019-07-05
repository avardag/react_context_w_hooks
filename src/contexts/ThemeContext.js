import React, { useState, createContext } from 'react';

//create context
export const ThemeContext = createContext();

// create provider, to be consumed by inner components
export function ThemeProvider(props) {
  const [isDarkMode, setIsDarkMode] = useState(true)
 
  //methods
  const toggleTheme = () =>{
    setIsDarkMode(!isDarkMode)
  }

  return (
    //can also pass other values apart from state
    // <ThemeContext.Provider value={{...this.state, isOpen: true}}> 
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
  
}



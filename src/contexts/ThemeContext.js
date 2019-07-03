import React, { Component, createContext } from 'react';

//create context
export const ThemeContext = createContext();

// create provider, to be consumed by inner components
export class ThemeProvider extends Component{
  state={
    isDarkMode: true
  }
  render(){
    return (
      //can also pass other values apart from state
      // <ThemeContext.Provider value={{...this.state, isOpen: true}}> 
      <ThemeContext.Provider value={{...this.state, }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}



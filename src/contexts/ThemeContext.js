import React, { Component, createContext } from 'react';

//create context
export const ThemeContext = createContext();

// create provider, to be consumed by inner components
export class ThemeProvider extends Component{
  state={
    isDarkMode: true
  }
  //methods
  toggleTheme = () =>{
    this.setState({isDarkMode: !this.state.isDarkMode})
  }
  render(){
    return (
      //can also pass other values apart from state
      // <ThemeContext.Provider value={{...this.state, isOpen: true}}> 
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}



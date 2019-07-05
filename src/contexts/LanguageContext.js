import React, { Component, createContext } from 'react';

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
  state={
    language: 'french'
  }
  toggleLanguage = (e) =>{
    this.setState({language: e.target.value})
  }
  render() {
    return (
      <LanguageContext.Provider 
        value={{...this.state, toggleLanguage: this.toggleLanguage}}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageProvider;
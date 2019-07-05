import React from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const withLanguageContext = (Component)=> props=> {
  return (
  <LanguageContext.Consumer>
    {value => <Component  languageCTX={value} {...props}/>}
  </LanguageContext.Consumer>
  )
}

export default withLanguageContext;
import React, { useState, createContext } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider(props)  {
  const [language, setLanguage] = useState("english");

  const toggleLanguage = (e) => setLanguage(e.target.value)

  return (
    <LanguageContext.Provider 
      value={{language, toggleLanguage: toggleLanguage}}
    >
      {props.children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
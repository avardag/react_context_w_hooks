import React from 'react';
import RegisterForm from './RegisterForm';
import Navbar from './Navbar';
import PageContent from './PageContent';
import { ThemeProvider } from './contexts/ThemeContext'
import LanguageProvider from './contexts/LanguageContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <Navbar/>
          <RegisterForm/>
        </PageContent>
      </LanguageProvider>
      
    </ThemeProvider>
  );
}

export default App;

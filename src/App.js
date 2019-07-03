import React from 'react';
import RegisterForm from './RegisterForm';
import Navbar from './Navbar';
import PageContent from './PageContent';
import { ThemeProvider } from './contexts/ThemeContext'
function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <Navbar/>
        <RegisterForm/>
      </PageContent>
    </ThemeProvider>
  );
}

export default App;

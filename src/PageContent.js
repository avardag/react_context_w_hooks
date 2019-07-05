import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

function PageContent(props)  {
  
    const {isDarkMode} = useContext(ThemeContext);

    const styles = {
      backgroundColor: isDarkMode? 'teal': 'white',
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={styles}>
        {props.children}        
      </div>
    );

}

export default PageContent;
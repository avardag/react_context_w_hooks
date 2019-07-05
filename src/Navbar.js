import React, { useContext } from 'react';
import styles from './styles/NavbarStyles';
//Material UI imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles'
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';

const localeVars = {
  english: {
    search: 'Search',
    flag: '🇬🇧'
  },
  french: {
    search: 'Chercher',
    flag: '🇫🇷'
  },
  spanish: {
    search: 'Buscar',
    flag: '🇪🇸'
  },
}
function Navbar(props) {
  
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const {classes} = props;
  const {language} = useContext(LanguageContext);
  const { search, flag } = localeVars[language]

  return (
    <div className={classes.root}>
      <AppBar position="static" color={isDarkMode ? "default": "primary"}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span>
              {flag}
            </span>
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit">
            App Title
          </Typography>
          <Switch onChange={toggleTheme}/>
          <div className={classes.grow}/>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase placeholder={`${search}...`} classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);
import React, { useContext, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ThemeContext } from "./ThemeContext.js";
import { LanguageContext } from "./LanguageContext.js";

const useStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    height: 52,
  }
}));

function BottomAppBar() {
  const classes = useStyles();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <React.Fragment>
      <AppBar position="fixed" color={isDarkMode ? "inherit" : "primary"} className={classes.appBar}>
        <Toolbar>
          <FormControlLabel
            control={<Switch name="theme" onChange={toggleTheme} />}
            label="DarkTheme" />
          <Select value={language} style={{ marginLeft: 50 }} onChange={changeLanguage}>
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Hindi">हिंदी</MenuItem>
            <MenuItem value="Marathi">मराठी</MenuItem>
          </Select>
        </Toolbar>
      </AppBar> 
    </React.Fragment>
  );
}

export default memo(BottomAppBar);

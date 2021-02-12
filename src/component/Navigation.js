import React, { useLayoutEffect, useState, useContext, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import logo from '../logo.svg'
import './Navigation.css'
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ThemeContext } from "./ThemeContext.js";
import { LanguageContext } from "./LanguageContext.js";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        position: "sticky"
    },
    title: {
        flexGrow: 1,
        fontSize: 18,
    },
    login: {
        fontSize: 17,
        color: "#fff"
    },
    linkStyle1: {
        textDecoration: 'none',
        color: '#3f51b5'
    },
    linkStyle2: {
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.87)'
    },
    drawerPaper: {
        width: 240,
    },
    drawerHeader: {
        float: 'left',
    },
}));

function useWindowSize() {
    const [size, setSize] = useState([0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

function ButtonAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [navigationItem, setNavigationItem] = React.useState(null);
    const [subNavigationList, setSubNavigationList] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [width] = useWindowSize();
    const { isDarkMode } = useContext(ThemeContext);
    const { navigationList, musicList, sportsList, moviesList } = useContext(LanguageContext);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

        setNavigationItem(event.currentTarget.innerText);

        switch (event.currentTarget.innerText) {
            case navigationList[0]:
                setSubNavigationList(musicList);
                break;
            case navigationList[1]: setSubNavigationList(moviesList);
                break;
            case navigationList[2]: setSubNavigationList(sportsList);
                break;
            default: setSubNavigationList([]);
                break;
        }
    };

    const handleClose = (event) => {
        setAnchorEl(null);
        setSubNavigationList([]);
        setOpen(false);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };



    const list = (
        <Drawer
            anchor="right"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronRightIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem button key={"Login"}>
                    <ListItemText primary={"Login"} onClick={handleDrawerClose} />
                </ListItem>
                {navigationList.map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} onClick={handleClick} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )


    return (
        <React.Fragment>
            <Toolbar>{/* content */}</Toolbar>
            <AppBar color={isDarkMode ? "inherit" : "primary"}>
                <Toolbar>
                    <img src={logo} className='logo' alt="logo" />
                    {
                        width < 780 ?
                            <div className='drawerIcon'>
                                <IconButton
                                    color="inherit"
                                    onClick={handleDrawerOpen}>
                                    <MenuIcon />
                                </IconButton>
                            </div>
                            :
                            <React.Fragment>
                                {
                                    navigationList.map(navigationItem => (
                                        <Typography className={classes.title} onClick={handleClick} key={navigationItem}>
                                            {navigationItem}
                                        </Typography>
                                    ))
                                }
                                <Button className={classes.login}>Login</Button>
                            </React.Fragment>
                    }

                    <Menu
                        className='navigationMenu'
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        {
                            subNavigationList.map(subNavigationItem => (
                                <Link key={subNavigationItem} to={"/" + navigationItem + "/" + subNavigationItem} className={isDarkMode ? classes.linkStyle2:classes.linkStyle1}>
                                    <MenuItem onClick={handleClose}>{subNavigationItem}</MenuItem>
                                </Link>
                            ))
                        }
                    </Menu>
                </Toolbar>
            </AppBar>

            { width < 780 ? list : ''}
        </React.Fragment>
    );
}
export default memo(ButtonAppBar);


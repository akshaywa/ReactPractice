import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import logo from '../logo.svg'
import './Navigation.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: "static"
    },
    title: {
        flexGrow: 1,
        fontSize: 18,
    },
    login: {
        fontSize: 17,
        color: "#fff"
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    
    const navigationList = ["Music", "Sports", "News", "Movies"]
    const musicList = ["Classic", "Disco", "Bollywood", "Indipop", "Rap"]
    const sportsList = ["Test", "Football Worldcup", "Wimbledon", "Olympics", "IPL"]
    const newsList = ["Regional", "National", "International", "Sports", "Covid19"]
    const moviesList = ["Drama", "Romance", "Action", "Adventure", "Biopic"]


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [subNavigationList, setSubNavigationList] = React.useState([]);
    

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

        switch (event.currentTarget.innerText) {
            case "Music": setSubNavigationList(musicList);
                break;
            case "Sports": setSubNavigationList(sportsList);
                break;
            case "News": setSubNavigationList(newsList);
                break;
            case "Movies": setSubNavigationList(moviesList);
                break;
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSubNavigationList([]);
    };

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <img src={logo} className='logo' alt="logo" />
                    {
                        navigationList.map(navigationItem => (
                            <Typography className={classes.title} onClick={handleClick} key={navigationItem}>
                                {navigationItem}
                            </Typography>
                        ))
                    }
                    <Menu
                        className='navigationMenu'
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        {
                            subNavigationList.map(subNavigationItem => (
                                <MenuItem onClick={handleClose} key={subNavigationItem}>{subNavigationItem}</MenuItem>
                            ))
                        }
                    </Menu>
                    <Button className={classes.login}>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

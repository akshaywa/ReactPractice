import React from 'react';
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

const useStyles = makeStyles((theme) => ({
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
    linkStyle: {
        textDecoration: 'none',
        color: '#3f51b5'
    }
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [navigationItem, setNavigationItem] = React.useState(null);
    const [subNavigationList, setSubNavigationList] = React.useState([]);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

        setNavigationItem(event.currentTarget.innerText);

        switch (event.currentTarget.innerText) {
            case "Music":
                setSubNavigationList(props.musicList);
                break;
            case "Sports": setSubNavigationList(props.sportsList);
                break;
            case "News": setSubNavigationList(props.newsList);
                break;
            case "Movies": setSubNavigationList(props.moviesList);
                break;
            default: setSubNavigationList([]);
                break;
        }
    };

    const handleClose = (event) => {
        setAnchorEl(null);
        setSubNavigationList([]);
    };

    return (
        <React.Fragment>
            <Toolbar>{/* content */}</Toolbar>
            <AppBar>
                <Toolbar>
                    <img src={logo} className='logo' alt="logo" />
                    {
                        props.navigationList.map(navigationItem => (
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
                                <Link key={subNavigationItem} to={"/" + navigationItem + "/" + subNavigationItem} className={classes.linkStyle}>
                                    <MenuItem onClick={handleClose}>{subNavigationItem}</MenuItem>
                                </Link>
                            ))
                        }
                    </Menu>
                    <Button className={classes.login}>Login</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

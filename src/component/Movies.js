import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Apicall from '../utils/Apicall.js';
import './Movies.css'
import { Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';

export default function Movies(props) {
    const [movieList, setMovieList] = React.useState([]);

    useEffect(() => {
        var movieList1 = [];
        Apicall.getMovies(props.genre2).then((movieList2) => {
            movieList1 = movieList2.data.results;
            setMovieList(movieList1);
        }).catch((error) => {            
            setMovieList([]);
            console.log(error);
        });
    }, [props.genre2]);

    const deleteCard = (event) => {
        let movieList1 = [...movieList];
        movieList1.splice(event.target.name, 1);
        setMovieList(movieList1);
    };


    return (
        <div style={{marginBottom: '6%'}}>
            <Paper variant="outlined" style={{ padding: 10 }}>
                <Typography gutterBottom variant="h6">
                    Instructions:
                </Typography>
                <span style={{ color: 'black', fontSize: 17 }}>
                    Click on each Movie type in navigation, you will get different Movies from api.<br />
                You can delete card.
                </span>
            </Paper>
            <br />
            <div className="cardContainer">
                {
                    movieList.map((movieItem, index) => (
                        <Card key={index} className="cardSingle">
                            <CardContent className="cardContent">
                                <Typography gutterBottom variant="h5" component="h2">
                                    {movieItem.original_title}
                                    <DeleteIcon name={index.toString()} onClick={deleteCard} style={{ float: 'right', fill: "#cc0000" }} />
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {movieItem.overview}
                                </Typography>
                            </CardContent>
                            <Grid container className="cardStats">
                                <Grid item>
                                    <FavoriteIcon style={{ fill: "red" }} />
                                </Grid>
                                <Grid item>
                                    <Typography component="h5">
                                        {movieItem.popularity}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <ShareIcon style={{ fill: "#3f51b5", marginLeft: 10 }} />
                                </Grid>
                                <Grid item>
                                    <Typography component="h5">
                                        {movieItem.release_date}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    ))
                }
            </div>
        </div >
    );
}

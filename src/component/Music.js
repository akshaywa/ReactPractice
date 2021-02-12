import React, { useEffect, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Apicall from '../utils/Apicall.js';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

const columns = [
    {
        id: 'check',
        label: 'Check'
    },
    {
        id: 'artistId',
        label: 'ArtistId'
    },
    {
        id: 'artist',
        label: 'Artist'
    },
    {
        id: 'albumId',
        label: 'AlbumId'
    },
    {
        id: 'album',
        label: 'Album'
    },
    {
        id: 'track',
        label: 'Track'
    },
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 400,
    },
    deleteIcon: {
        fill: "#cc0000",
        float: 'right',
        width: 40,
        height: 30
    }
});

function Music(props) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);
    const [musicList, setMusicList] = React.useState([]);
    const [checkedAll, setChecked] = React.useState(false);

    useEffect(() => {        
        var musicList1 = []
        Apicall.getMusic(props.genre2).then((musicList2) => {
            for (let music of musicList2) {
                musicList1.push({ check: false, artistId: music.id_artist, artist: music.artist, albumId: music.id_album, album: music.album, track: music.track });
            }
            setMusicList(musicList1);
        }).catch((error) => {
            setMusicList([]);
            console.log(error);
        });
    }, [props.genre2]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleChangeAll = (event) => {
        let musicList1 = [...musicList];
        for (let i = 0; i < musicList1.length; i++) {
            musicList1[i.toString()].check = event.target.checked;
        }
        setMusicList(musicList1)
        setChecked(event.target.checked);
    };

    const handleChangeRow = (event) => {
        let musicList1 = [...musicList];
        musicList1[event.target.name].check = event.target.checked;
        setMusicList(musicList1);
        setChecked(false);
    };

    const deleteRow = (event) => {
        let musicList1 = [...musicList];
        for (let i = 0; i < musicList1.length; i++) {
            if (musicList1[i.toString()].check === true) {
                musicList1.splice(i.toString(), 1);
            }
        }
        setMusicList(musicList1);
    };

    return (
        <React.Fragment>
            <Paper variant="outlined" style={{ padding: 10 }}>
                <Typography gutterBottom variant="h6">
                    Instructions:
                </Typography>
                <span style={{ color: 'black', fontSize: 17 }}>
                    Click on each Music type in navigation, you will get different Musics from api.<br />
                You can delete row. You can change rows per page.<br />
                Minimize screen the navbar will convert to drawer.<br/>
                Use dark theme.<br/>
                Change language and navigate.
                </span>
            </Paper>
            <br />
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow >
                                {columns.map((column) => (
                                    <React.Fragment key={column.id}>
                                        {(column.id === 'check') ?
                                            <TableCell className="tableHeadSelect" style={{ backgroundColor: 'grey' }}>
                                                <Checkbox
                                                    checked={checkedAll}
                                                    onChange={handleChangeAll}
                                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                                    style={{ color: "#cc0000" }} />
                                            </TableCell>
                                            :
                                            <TableCell
                                                align={column.align}
                                                className={classes.tableHead}
                                                style={{ minWidth: column.minWidth, backgroundColor: 'grey', fontSize: 18 }} >
                                                {column.label}
                                                {(column.label === "Track") ? <DeleteIcon onClick={deleteRow} className={classes.deleteIcon} /> : ''}
                                            </TableCell>}
                                    </React.Fragment>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                musicList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                            {
                                                columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <React.Fragment key={column.id} >
                                                            { column.id === 'check' ?
                                                                <TableCell>
                                                                    <Checkbox
                                                                        checked={value}
                                                                        name={index.toString()}
                                                                        onChange={handleChangeRow}
                                                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                                                        style={{ color: "#cc0000" }} />
                                                                </TableCell>
                                                                :
                                                                <TableCell align={column.align} >
                                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                                </TableCell>}
                                                        </React.Fragment>
                                                    );
                                                })
                                            }
                                        </TableRow>
                                    );
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[4, 10, 25]}
                    component="div"
                    count={musicList.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    style={{ backgroundColor: 'grey' }}
                />
            </Paper>
        </React.Fragment>
    );

}

export default memo(Music);
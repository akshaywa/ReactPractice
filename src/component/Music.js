import React, { useEffect } from 'react';
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

const columns = [
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
});

export default function Music(props) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [musicList, setMusicList] = React.useState([]);
    const [checked, setChecked] = React.useState(true);

    useEffect(() => {
        Apicall.getMusic(props.genre2).then((musicList2) => {
            var musicList1 = []
            for (let music of musicList2) {
                musicList1.push({ 'artistId': music.id_artist, "artist": music.artist, "albumId": music.id_album, "album": music.album, "track": music.track });
            }
            setMusicList(musicList1);
        }).catch((error) => {
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

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow >
                            {columns.map((column, index) => (
                                <React.Fragment key={column.id}>
                                    {
                                        index === 0 &&
                                        <TableCell className="tableHeadSelect" style={{ backgroundColor: 'grey' }}>
                                            <Checkbox
                                                checked={checked}
                                                onChange={handleChange}
                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                                style={{ color: "#cc0000" }} />
                                        </TableCell>
                                    }
                                    <TableCell
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, backgroundColor: 'grey' }} >
                                        {column.label}
                                        {(column.label === "Track") ? <DeleteIcon style={{ fill: "#cc0000", float: 'right', width: 40, height: 30 }} /> : ''}
                                    </TableCell>
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
                                            columns.map((column, index) => {
                                                const value = row[column.id];
                                                return (
                                                    <React.Fragment key={column.id} >
                                                        {index === 0 &&
                                                            <TableCell>
                                                                <Checkbox
                                                                    checked={checked}
                                                                    onChange={handleChange}
                                                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                                                    style={{ color: "#cc0000" }} />
                                                            </TableCell>
                                                        }
                                                        <TableCell align={column.align} >
                                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                                                        </TableCell>
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
    );
}

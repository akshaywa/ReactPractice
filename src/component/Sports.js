import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import './Sports.css';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useFormState from './useFormState.js'

const educations = [
    {
        value: 'Arts',
        label: 'Arts',
    },
    {
        value: 'Science',
        label: 'Science',
    },
    {
        value: 'Commerce',
        label: 'Commerce',
    },
    {
        value: 'Sports',
        label: 'Sports',
    },
];

export default function Sports() {
    const [education, setEducation] = useFormState('');
    const [gender, setGender] = useFormState('Female');
    const [showPassword, setShowPassWord] = useState(false);
    const [password, setPassword] = useFormState('');
    const [name, setName] = useFormState('');
    const [addressLine1, setAddressLine1] = useFormState('');
    const [addressLine2, setAddressLine2] = useFormState('');
    const [date, setDate] = useFormState('');


    const [detailsRequireList, setDetailsRequire] = useState([
        "Handicapped",
        "Disabled",
        "Senior",
        "Junior"
    ]);
    const [detailsSelectList, setDetailsSelect] = useState([]);


    const handleClickShowPassword = () => {
        setShowPassWord(!showPassword);
    };


    const handleDetailsReruireSelected = (props) => (event) => {
        var detailsRequireList1 = [...detailsRequireList];
        for (let i = 0; i < detailsRequireList1.length; i++) {
            if (detailsRequireList1[i.toString()] === props) {
                setDetailsSelect([...detailsSelectList, detailsRequireList1[i.toString()]]);
                detailsRequireList1.splice(i.toString(), 1);
            }
        }
        setDetailsRequire(detailsRequireList1);
    }

    const handleDetailsSelectSelected = (props) => (event) => {
        var detailsSelectList1 = [...detailsSelectList];
        for (let i = 0; i < detailsSelectList1.length; i++) {
            if (detailsSelectList1[i.toString()] === props) {
                setDetailsRequire([...detailsRequireList, detailsSelectList1[i.toString()]]);
                detailsSelectList1.splice(i.toString(), 1);
            }
        }
        setDetailsSelect(detailsSelectList1);
    }

    return (
        <div style={{marginBottom: '7%'}}>
            <Paper style={{ width: 415, height: 200, marginBottom: 20, padding: 10 }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h6">
                            Controlled Form:
                </Typography></Grid>
                    <Grid item xs={12}><b>Name:</b>&ensp; {name}</Grid>
                    <Grid item xs={12}><b>Education:</b>&ensp; {education}</Grid>
                    <Grid item xs={12}><b>Address1:</b>&ensp; {addressLine1}</Grid>
                    <Grid item xs={12}><b>Address2:</b>&ensp; {addressLine2}</Grid>
                    <Grid item xs={12}><b>BirthDate:</b>&ensp; {date}</Grid>
                    <Grid item xs={12}><b>Gender:</b>&ensp; {gender}</Grid>
                    <Grid item xs={12}><b>Criteria:</b>&ensp; {detailsSelectList.map((detailsSelect) => (
                        <p key={detailsSelect} style={{ display: 'inline' }}>{detailsSelect}&ensp;</p>
                    ))}
                    </Grid>
                </Grid>
            </Paper>

       
        <Grid container>
                <Grid container item spacing={1} xs={12} sm={9} className="formContainer" style={{ backgroundColor: "white" }}>
                    <Grid container item spacing={2}>
                        <Grid item md={5} sm={6} xs={12}>
                            <TextField
                                label="Name"
                                multiline
                                variant="filled"
                                size="small"
                                fullWidth={true}
                                required
                                onChange={setName}
                            />
                        </Grid>
                        <Grid item md={3} sm={4} xs={12}>
                            <TextField
                                variant="filled"
                                select
                                label="Education"
                                size="small"
                                fullWidth={true}
                                value={education}
                                onChange={setEducation}
                            >
                                {educations.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </Grid>
                        <Grid item md={4} sm={2} xs={12}>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                        <Grid item md={4} sm={5} xs={12}>
                            <TextField
                                label="Address Line 1"
                                multiline
                                variant="filled"
                                size="small"
                                fullWidth={true}
                                required
                                onChange={setAddressLine1}
                            />
                        </Grid>
                        <Grid item md={4} sm={5} xs={12}>
                            <TextField
                                label="Address Line 2"
                                multiline
                                variant="filled"
                                size="small"
                                fullWidth={true}
                                onChange={setAddressLine2}
                            />
                        </Grid>
                        <Grid item md={4} sm={2} xs={12}>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                        <Grid item xs={5}>
                            <TextField
                                variant="filled"
                                size="small"
                                type="date"
                                defaultValue="1996-09-09"
                                onChange={setDate}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                        <Grid item xs={8}>
                            <FormLabel>Gender&emsp;</FormLabel>
                            <RadioGroup value={gender} onChange={setGender} style={{ display: 'inline' }}>
                                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                <FormControlLabel value="Other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={2}>
                        <Grid item xs={8}>
                            <TextField
                                label="Password"
                                variant="filled"
                                size="small"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                required
                                onChange={setPassword}>
                            </TextField>
                            <IconButton
                                onClick={handleClickShowPassword}
                                edge="end">
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </Grid>
                    </Grid>                    
                    <p>Select Criteria Fitting In from List:</p>
                    <Grid container item spacing={2}>
                        <Grid item md={3} xs={12}>
                            <Paper variant="outlined" style={{ height: 153 }}>
                                {
                                    detailsRequireList.map(detailsRequire => {
                                        return (<p className="enhanceSelection" key={detailsRequire} onClick={handleDetailsReruireSelected(detailsRequire)} >{detailsRequire}</p>);
                                    })
                                }
                            </Paper>
                        </Grid>
                        <Grid item md={2} xs={12}>
                            <KeyboardArrowRightIcon onClick={handleDetailsReruireSelected(detailsRequireList[0])} style={{ backgroundColor: 'rgba(0, 0, 0, 0.09)', height: 30, width: 35, float: 'left' }} /> &emsp;
                            <KeyboardArrowLeftIcon onClick={handleDetailsSelectSelected(detailsSelectList[0])} style={{ backgroundColor: 'rgba(0, 0, 0, 0.09)', height: 30, width: 35, float: 'right' }} />
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Paper variant="outlined" style={{ height: 153 }}>
                                {
                                    detailsSelectList.map(detailsSelect => {
                                        return (
                                            <React.Fragment>
                                                <p className="enhanceSelection" key={detailsSelect} onClick={handleDetailsSelectSelected(detailsSelect)}>{detailsSelect}</p>
                                            </React.Fragment>
                                        );
                                    })
                                }
                            </Paper>
                        </Grid>
                    </Grid>

                    <Button variant="contained" size="large" color="primary" style={{ marginTop: 10 }}>
                        Submit
                    </Button>
                </Grid>
                <Grid container item spacing={1} sm={3}>
                </Grid>
            </Grid>
        </div>
    );
}

import React from 'react';
import TextField from '@material-ui/core/TextField';
import { CardMedia, CircularProgress } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2),
    },
    imgContainer: {
        padding: '5%',
    },
}));

function ResultSection(props) {
    const classes = useStyles();

    return (
        <div>
            {props.step > 0 ?
                <TextField
                    value={props.name}
                    variant='outlined'
                    required
                    label='Nombre'
                    margin='normal'
                    onChange={props.textHandler}
                    disabled = {props.step>1}
                /> : null}
            {props.img !== null ?
                <CardMedia className={classes.imgContainer}
                    component="img"
                    alt="Result Image"
                    height="100%"
                    image={props.img}
                    title="Result Image" /> : null}
            {props.loading ? <CircularProgress className={classes.progress} /> : null}

        </div>
    )
}

export default ResultSection;
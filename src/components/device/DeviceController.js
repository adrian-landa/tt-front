import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Spinner from '../../res/Spinner.svg'
import PowerIcon from '@material-ui/icons/Power';
const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: '50%',
        padding: '5%', // 16:9
    },
    button: {
        margin: theme.spacing(1),
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
}));

function DeviceControl(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    title="Sample"
                    component="img"
                    alt="Sample"
                    image={Spinner}
                />
                <CardContent>
                    <Typography paragraph>Nombre: {props.name}</Typography>
                </CardContent>

            </CardActionArea>

            <CardActions disableSpacing>
                <FormControlLabel
                    control={
                        <Switch checked={props.isActive} onChange={props.changeListener} />
                    }
                    label="Active"
                />
                <Button variant="contained" color="secondary" className={classes.button}>
                    Encender
                    <PowerIcon className={classes.rightIcon} />
                </Button>
            </CardActions>

        </Card>
    );
}

export default DeviceControl;
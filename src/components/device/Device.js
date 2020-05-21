import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Spinner from '../../res/Spinner.svg'
import { Link, withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: '50%',
        padding: '5%', // 16:9
    },
}));

function Device(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>

            <CardActionArea
                component={Link} to={`/device/${props.id}`}>
                <CardMedia
                    className={classes.media}
                    title="Sample"
                    component="img"
                    alt="Sample"
                    image={Spinner}
                />
                <CardContent>
                    <Typography paragraph>Nombre: {props.name}</Typography>
                    <Typography paragraph>Creación: {props.created}</Typography>
                </CardContent>

            </CardActionArea>

            <CardActions disableSpacing>
                <FormControlLabel
                    control={
                        <Switch checked={props.isActive}
                            onChange={props.changeListener} />
                    }
                    label="Active"
                />
            </CardActions>

        </Card>
    );
}

export default withRouter(Device);
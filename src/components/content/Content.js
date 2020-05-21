import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link, withRouter } from 'react-router-dom';
import { URL_BASE } from '../../constants'
const useStyles = makeStyles(theme => ({
    card: {
        width: '70%',
    },
    media: {
        width: '100%',
        heigth : '100%',
    },
}));

function Content(props) {
    const classes = useStyles();
    console.log(props.image)
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    title="Sample"
                    component="img"
                    alt="Sample"
                    image={URL_BASE+props.image}
                />
                <CardContent>
                    <Typography paragraph>Nombre: {props.name}</Typography>
                </CardContent>

            </CardActionArea>

        </Card>
    );
}

export default withRouter(Content);
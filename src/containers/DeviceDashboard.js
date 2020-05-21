import React, { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import DeviceController from '../components/device/DeviceController';
import Content from '../components/content/Content'
import { Link, withRouter } from 'react-router-dom';
import { EP_DEVICE } from '../constants'
import axios from 'axios';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    imgContainer: {
        padding: '5%',
    },
}));

const DeviceDashboard = (props) => {
    const classes = useStyles();
    const [device, setDevice] = useState({ contents: [], isActive: false })

    useEffect(() => {
        axios.get(EP_DEVICE + '/' + props.match.params['id'])
            .then(response => {
                const data = response.data
                const tmpContents = data['contents'].map(content => {
                    return ({
                        id: content['id'],
                        name: content['name'],
                        image: content['result_file'],
                        file: content['binary_file'],
                        created: Date(content['created']),
                    })
                })
                const tmpDevice = {
                    id: data['id'],
                    name: data['name'],
                    isActive: data['is_active'],
                    created: Date(data['created']),
                    contents: tmpContents,
                }
                console.log(tmpDevice)
                setDevice(tmpDevice)
            })
            .catch(error => {
                console.log(error);
            })

    }, []);

    const activeDeviceHandler = (id) => {

    }

    const contents = device.contents.map(itm => {
        return (
            <Grid key={itm.id} item sm={6} >
                <Content
                    id={itm.id}
                    name={itm.name}
                    image={itm.image} />
            </Grid>
        )
    })


    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} >
                    <Typography paragraph>Dispositivo</Typography>
                    <DeviceController
                        name={device.name}
                        isActive={device.isActive}
                        changeListener={() => activeDeviceHandler(device.id)} />
                </Grid>

                <Grid container item xs={12} sm={6} spacing={1}>

                    <Grid item xs={12} >
                        <Typography paragraph>Contenido</Typography>
                    </Grid>

                    {contents}
                </Grid>
            </Grid>

            <Fab aria-label='ADD' className={classes.fab} color='primary'
                component={Link} to={`${props.match.url}/upload`}>
                <AddIcon />
            </Fab>

        </div>
    )
}

export default withRouter(DeviceDashboard);
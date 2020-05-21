import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Device from '../components/device/Device';
import { EP_DEVICE } from '../constants'
import axios from 'axios';

function DeviceContainer(props) {
    const [devices, setDevices] = useState([])

    useEffect(() => {
        axios.get(EP_DEVICE)
            .then(response => {
                const items = response.data['devices']
                const tmpDevices = items.map(item => {
                    return ({
                        id: item['id'],
                        name: item['name'],
                        isActive: item['is_active'],
                        created: Date(item['created']),
                        contents: item['contents'],
                    })
                })
                setDevices(tmpDevices)
            })
            .catch(error => {
                console.log(error);
            })

    }, []);

    const activeDeviceHandler = (id) => {
        const index = devices.findIndex(d => {
            return d.id === id
        })
        const device = {
            ...devices[index]
        }
        device.isActive = !device.isActive
        const tmpDevices = [...devices]
        tmpDevices[index] = device
        setDevices(tmpDevices)
    }


    const items = devices.map(
        itm => {
            return (
                <Grid key={itm.id} item sm={3} xs={12}>
                    <Device
                        id={itm.id}
                        name={itm.name}
                        isActive={itm.isActive}
                        contents ={itm.contents}
                        created = {itm.created}
                        changeListener={() => activeDeviceHandler(itm.id)} />
                </Grid>
            )
        })
    return (

        <Grid container spacing={2}>
            {items}
        </Grid>
    )
}
export default DeviceContainer;
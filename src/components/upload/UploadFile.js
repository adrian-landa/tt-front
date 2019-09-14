import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import CachedIcon from '@material-ui/icons/Cached';
import NavigationIcon from '@material-ui/icons/Navigation'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, CardMedia } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';
import AddThumbnail from '../../res/AddThumbnail.svg';
import axios from 'axios';
import ResultSection from './section/ResultSection'

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

function UploadFile(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [file, setFile] = useState(null)
    const [url, setURL] = useState(null)
    const [resURL, setResURL] = useState(null)
    const [name, setName] = useState('')
    const [step, setStep] = useState(0)
    const [loading, setLoading] = useState(false)
    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };


    const changeTextHandler = (event) => {
        const name = event.target.value
        setName(name)
    }



    const onUploadClickListener = () => {
        document.getElementById("chooser").click()
    }

    const onClickListener = (action) => {
        switch (action) {
            case 'SEND':
                setStep(0)
                break;
            case 'PROCESS':
                setLoading(true)
                const fd = new FormData();
                fd.append('image', file, file.name);
                fd.append('name', name);
                axios.post('/content/', fd)
                    .then(response => {
                        const result = 'http://192.168.100.124:8000' + response.data.result
                        setResURL(result)
                        setStep(2)
                        setLoading(false)
                    })
                    .catch(error => {
                        console.log(error);
                    })
                break;
            default:
                setStep(0)
                break;

        }
    }


    const onFileSelectedHandler = (event) => {
        const files = event.target.files
        if (files.length > 0) {
            const tmpFile = files[0]
            const tmpURL = URL.createObjectURL(tmpFile)
            setURL(tmpURL)
            setFile(tmpFile)
            setName(tmpFile.name)
            setStep(1)
        }
    }


    const fabs = [
        {
            color: 'primary',
            className: classes.fab,
            icon: <CachedIcon />,
            label: 'PROCESS',
            inStep: 1,
        },
        {
            color: 'primary',
            className: classes.fab,
            icon: <NavigationIcon />,
            label: 'SEND',
            inStep: 2,
        }
    ]

    return (
        <div>
            <Grid container>
                <Grid item sm={6} xs={12}>
                    <CardMedia className={classes.imgContainer}
                        component="img"
                        alt="Preview Image"
                        height="100%"
                        image={url !== null ? url : AddThumbnail}
                        title="Preview Image"
                        onClick={onUploadClickListener} />
                </Grid>


                <Grid item sm={6} xs={12}>
                    <ResultSection
                        name={name}
                        textHandler={changeTextHandler}
                        img={resURL}
                        loading={loading}
                        step={step} />
                </Grid>

            </Grid>
            <input id="chooser" type="file" onChange={onFileSelectedHandler} hidden accept='image/*' />
            {fabs.map((fab, index) => (
                <Zoom
                    key={index + fab.color}
                    in={fab.inStep === step}
                    timeout={transitionDuration}
                    style={{
                        transitionDelay: `${fab.inStep === step ? transitionDuration.exit : 0}ms`,
                    }}
                    unmountOnExit
                >
                    <Fab aria-label={fab.label} className={fab.className} color={fab.color}
                        onClick={() => { onClickListener(fab.label) }}>
                        {fab.icon}
                    </Fab>
                </Zoom>
            ))}




        </div>
    )
}

export default UploadFile


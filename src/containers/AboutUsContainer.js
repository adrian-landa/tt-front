import React from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Prototype from '../res/Prototype.png'
import IPNLogo from '../res/ipn-logo.png'
import UPIITALogo from '../res/upiita-logo.png'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    center: {
        textAlign: 'center',
        width: '100%',
        margin: '0px'
    },
    row: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}));


function AboutUsContainer(props) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.row}>
                <img src={IPNLogo} width='96px' alt="IPN" />
                <Typography variant={'subtitle1'}>Instituto Politecnico Nacional</Typography>
                <img src={UPIITALogo} width='64px' alt="UPIITA" />
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className={classes.center}>
                        <Typography variant={'subtitle1'}>Unidad Profesional Interdisciplinaria en Ingeniería y Tecnologías Avanzadas </Typography>
                        <Typography variant={'subtitle1'}>"Prototipo Rotativo de Proyección de Imágenes Basado en la Persistencia de Visión" </Typography>
                        <img src={Prototype} width='35%' alt="Prototipo" />
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={6} >
                    <div className={classes.center}>
                        <Typography paragraph variant={'body1'}>Presentan</Typography>
                        <Typography variant={'body1'}>Aguilera Rodríguez Eduardo Gibran </Typography>
                        <Typography variant={'body1'}>López Landa Luis Adrian </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={classes.center}>
                        <Typography paragraph variant={'body1'}>Asesores</Typography>
                        <Typography variant={'body1'}>M. en C. Adrián Morales Blas </Typography>
                        <Typography variant={'body1'}>M. en C. David Arturo Gutiérrez Begovich </Typography>
                        <Typography variant={'body1'}>M. en C. Mauricio Méndez Martínez</Typography>
                    </div>
                </Grid>
            </Grid>
        </div >
    )
}
export default AboutUsContainer;
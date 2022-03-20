import React, { useContext, useEffect, useState } from 'react'
import { useForm } from '../../Hooks/useForm';
import { MesasExamenesNovedadesSave } from './MesasExamenesNovedadesSave';
import { periodosGetAll } from '../../Services/restCallPeriodos';
import { mesaExamenModel } from '../../Utils/Model/mesaExamenModel';
import { AgregarPeriodos } from '../../Template/AgregarPeriodos';
import { MesasExamenesContext } from '../../Context/BuildContext';
import { Box, Button, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material';
import { useModal } from '../../Hooks/useModal';

export const MesasExamenesMaestrosSave = () => {
    const {
        active,
        handleAddMesaExamen,
        handleEditMesaExamen,
        handleBack,
        errorMaestro: errors
    } = useContext(MesasExamenesContext);

    const [ formValues, handleInputChange ] = useForm( active.maestro );
    const [ novedad, setNovedad ] = useState( active.novedad );
    const [ periodoList, setPeriodoList ] = useState([]);
    const [ isOpenModal, openModal, closeModal ] = useModal( false );
    
    const handleListGetAll = async () => {
        setPeriodoList( await periodosGetAll('Mesa') );
    }

    useEffect(() => {
        handleListGetAll()
    }, [])
    
    
    const {
        descripcion,
        periodo_id
    } = formValues;

    return (
        <Box>
            <Paper sx={{ width: '60%', margin: '0 20% 2%', padding: '1%' }}>
                <Typography variant="h4" gutterBottom component="div">
                    Datos Mesa Examen Maestro
                </Typography>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="descripcion"
                            name="descripcion"
                            value={descripcion}
                            onChange={handleInputChange}
                            InputLabelProps={{ shrink: true, required: true }}
                            margin="normal"
                            label="Descripcion"
                            error={Boolean(errors?.descripcion)}
                            helperText={errors?.descripcion}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            id="periodo_id"
                            name="periodo_id"
                            value={ periodo_id }
                            onChange={ handleInputChange }
                            InputLabelProps={{ shrink: true, required: true }}
                            select
                            margin="normal"
                            label="Periodo"
                            error={Boolean(errors?.periodo_id)}
                            helperText={errors?.periodo_id}
                        >
                            <MenuItem value="" disabled>
                                Seleccione un periodo
                            </MenuItem>
                            { periodoList.map((p) => (
                                <MenuItem key={ p.id } value={ p.id }>
                                    { `${ p.descripcion }` }
                                </MenuItem>
                            )) }
                        </TextField>
                    </Grid>
                    <Grid item xs={3}>
                        <AgregarPeriodos
                            isOpenModal={isOpenModal}
                            openModal={openModal}
                            closeModal={closeModal}
                        />
                    </Grid>
                </Grid>
            </Paper>
            <MesasExamenesNovedadesSave
                novedad={ novedad }
                setNovedad={ setNovedad }
            />
            <Paper sx={{ width: '60%', margin: '0 20% 2%', padding: '1%' }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        {
                            active === mesaExamenModel
                            ? (
                                <Button
                                    fullWidth
                                    onClick={
                                        () => handleAddMesaExamen(formValues, novedad)
                                    }
                                    variant="contained"
                                >
                                    Guardar
                                </Button>
                            )
                            : (
                                <Button
                                    fullWidth
                                    onClick={
                                        () => handleEditMesaExamen(formValues, novedad)
                                    }
                                    variant="contained"
                                >
                                    Editar
                                </Button>
                            )
                        }
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            onClick={ handleBack }
                            variant="outlined"
                        >
                            Volver
                        </Button>
                    </Grid>

                </Grid>
            </Paper>
        </Box>
    )
}

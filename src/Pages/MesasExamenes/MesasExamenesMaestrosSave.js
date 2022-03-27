import React, { useContext, useEffect, useState } from 'react';
import { Box, Grid, MenuItem, Paper, TextField } from '@mui/material';
import { useMediaQuery } from '@material-ui/core';

import { theme } from '../../Components/GlobalStylesComponents/theme';
import { useForm } from '../../Hooks/useForm';
import { MesasExamenesNovedadesSave } from './MesasExamenesNovedadesSave';
import { periodosGetAll } from '../../Services/restCallPeriodos';
import { mesaExamenModel } from '../../Utils/Model/mesaExamenModel';
import { AgregarPeriodos } from '../../Template/AgregarPeriodos';
import { MesasExamenesContext } from '../../Context/BuildContext';
import { useModal } from '../../Hooks/useModal';
import {
    ButtonContained,
    ButtonOutlined,
    TypographyH4
} from '../../Components/GlobalStylesComponents/stylesComponents';

export const MesasExamenesMaestrosSave = () => {
    const {
        active,
        handleAddMesaExamen,
        handleEditMesaExamen,
        handleBack,
        errorMaestro: errors
    } = useContext(MesasExamenesContext);

    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

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
            <Paper
                sx={{
                    width: isMdUp ? '60%' : '100%',
                    margin: isMdUp ? '0 20% 2%' : '0 0 2%',
                    padding: '1%'
                }}
                variant="outlined"
            >
                <TypographyH4
                    label="Datos Mesa Examen Maestro"
                />
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
                    <Grid item xs={6}>
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
            <Box sx={{ width: '60%', margin: '0 20% 2%', padding: '1%' }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        {
                            active === mesaExamenModel
                            ? (
                                <ButtonContained
                                    CallBack={
                                        () => handleAddMesaExamen(formValues, novedad)
                                    }
                                    label="Guardar"
                                />
                            )
                            : (
                                <ButtonContained
                                    CallBack={
                                        () => handleEditMesaExamen(formValues, novedad)
                                    }
                                    label="Editar"
                                />
                            )
                        }
                    </Grid>
                    <Grid item xs={6}>
                        <ButtonOutlined
                            CallBack={ handleBack }
                            label="Volver"
                        />
                    </Grid>

                </Grid>
            </Box>
        </Box>
    )
}

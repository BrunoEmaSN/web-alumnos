import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import Swal from 'sweetalert2';
import { Box } from '@mui/system';
import { Grid, MenuItem, Paper, TextField } from '@mui/material';

import { useForm } from "../../Hooks/useForm";
import { materiasGetAll } from '../../Services/restCallMaterias';
import { MesasExamenesNovedadTable } from './MesasExamenesNovedadTable';
import { llamadosList } from '../../Utils/Model/mesaExamenModel';
import { MesasExamenesContext } from '../../Context/BuildContext';
import {
    ButtonContained,
    TypographyH4
} from '../../Components/GlobalStylesComponents/stylesComponents';

const initialState = {
    materia_id: '',
    fecha: '',
    llamado: '',
    examinador1: '',
    examinador2: '',
    examinador3: ''
};

const initialOldState = {
    materia_id: '',
    fecha: '',
    llamado: ''
}

const actionsList = { create: 'create', edit: 'edit' };

export const MesasExamenesNovedadesSave = ({ novedad, setNovedad }) => {
    const {handleErrorsNovedad, errorNovedad: errors} = useContext(MesasExamenesContext);
    const [ materiasList, setMateriasList ] = useState([]);
    const [ materia_descripcion, setMateriaDescripcion ] = useState('');
    const [ action, setAction ] = useState(actionsList.create);
    const [ oldState, setOldState ] = useState(initialOldState);

    const handleListGetAll = async () => {
        setMateriasList( await materiasGetAll() );
    }

    useEffect(() => {
        handleListGetAll();
    }, [])
  

    const [
        formValues,
        handleInputChange, , , ,
        setFormValues
    ] = useForm( initialState );

    const {
        materia_id,
        fecha,
        llamado,
        examinador1,
        examinador2,
        examinador3
    } = formValues;

    const handleMateriaChange = ({ target }) => {
        const materia = materiasList.find( m => m.id === parseInt( target.value ) );
        handleInputChange({ target });
        setMateriaDescripcion( materia.descripcion );
    }
    
    const handleAddRow = () => {
        const isExist = novedad.find( n => (
            parseInt(n.materia_id) === parseInt(materia_id)
            && n.llamado === llamado
        ));
        if(!isExist){
            if(handleErrorsNovedad(formValues)){
                setNovedad(
                    (prevState) => (
                    [
                        ...prevState,
                        { ...formValues, materia_descripcion }
                    ]
                    )
                );
                setFormValues(initialState);
                setMateriaDescripcion('');
                setAction(actionsList.create);
                setOldState(initialOldState);
            }
        } else{
            Swal.fire('Ya Existe una Mesa igual', '', 'info');
        }
    }

    const handleEditRow = () => {
        if(handleErrorsNovedad(formValues)){
            setNovedad(
                (prevState) => (
                    prevState.map((state) => (
                        state.materia_id === oldState.materia_id
                        && state.llamado === oldState.llamado
                        && state.fecha === oldState.fecha
                        ? { ...formValues, materia_descripcion }
                        : state
                    ))
                )
            );
            setFormValues(initialState);
            setMateriaDescripcion('');
            setAction(actionsList.create);
            setOldState(initialOldState);
        }
    }

    const handleFormValues = (row) => {
        setFormValues({
            materia_id: row.materia_id,
            fecha: moment(row.fecha).format('yyyy-MM-DD'),
            llamado: row.llamado,
            examinador1: row.examinador1,
            examinador2: row.examinador2,
            examinador3: row.examinador3
        });
        setMateriaDescripcion(row.materia_descripcion);
        setAction(actionsList.edit);
        setOldState({
            materia_id: row.materia_id,
            fecha: row.fecha,
            llamado: row.llamado
        });
    }

    const handleDeleteRow = (row) => {
        setNovedad(
            (prevState) => (
                prevState.filter(s => JSON.stringify( s ) !== JSON.stringify( row ))
            )
        );
    }
  
    return (
        <Box>
            <Paper sx={{ width: '60%', padding: '1%', margin:'0 20% 2%' }} variant="outlined">
                <TypographyH4
                    label="Datos Mesa Examen Novedad"
                />
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            id="materia_id"
                            name="materia_id"
                            value={ materia_id }
                            defaultValue=""
                            onChange={ handleMateriaChange }
                            InputLabelProps={{ shrink: true, required: true }}
                            select
                            margin="normal"
                            label="Materia"
                            required
                            error={Boolean(errors?.materia_id)}
                            helperText={errors?.materia_id}
                        >
                            <MenuItem value="" disabled>
                                Seleccione una materia
                            </MenuItem>
                            { materiasList.map((m) => (
                            <MenuItem key={ m.id } value={ m.id }>
                                { `${ m.descripcion }` }
                            </MenuItem>
                            )) }
                        </TextField>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            fullWidth
                            id="fecha"
                            name="fecha"
                            value={ fecha }
                            type="date"
                            onChange={ handleInputChange }
                            InputLabelProps={{ shrink: true, required: true }}
                            margin="normal"
                            label="Fecha"
                            error={Boolean(errors?.fecha)}
                            helperText={errors?.fecha}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            fullWidth
                            id="llamado"
                            name="llamado"
                            value={ llamado }
                            onChange={ handleInputChange }
                            InputLabelProps={{ shrink: true, required: true }}
                            select
                            margin="normal"
                            label="Llamado"
                            error={Boolean(errors?.llamado)}
                            helperText={errors?.llamado}
                        >
                            <MenuItem value="" disabled>
                            Seleccione un llamado
                            </MenuItem>
                            { llamadosList.map((l) => (
                                <MenuItem key={ l } value={ l }>
                                    { l }
                                </MenuItem>
                            )) }
                        </TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            fullWidth
                            id="examinador1"
                            name="examinador1"
                            value={ examinador1 }
                            onChange={ handleInputChange }
                            InputLabelProps={{ shrink: true, required: true }}
                            margin="normal"
                            label="Examinador 1"
                            error={Boolean(errors?.examinador1)}
                            helperText={errors?.examinador1}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            fullWidth
                            id="examinador2"
                            name="examinador2"
                            value={ examinador2 }
                            onChange={ handleInputChange }
                            InputLabelProps={{ shrink: true, required: true }}
                            margin="normal"
                            label="Examinador 2"
                            error={Boolean(errors?.examinador2)}
                            helperText={errors?.examinador2}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            fullWidth
                            id="examinador3"
                            name="examinador3"
                            value={ examinador3 }
                            onChange={ handleInputChange }
                            InputLabelProps={{ shrink: true, required: true }}
                            margin="normal"
                            label="Examinador 3"
                            error={Boolean(errors?.examinador3)}
                            helperText={errors?.examinador3}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        {
                            action === actionsList.create
                            ? (
                                <ButtonContained
                                    CallBack={ handleAddRow }
                                    label="Agregar"
                                />
                            )
                            : (
                                <ButtonContained
                                    CallBack={ handleEditRow }
                                    label="Editar"
                                />
                            )
                        }
                    </Grid>
                </Grid>
            </Paper>
            <Paper
                sx={{
                    width: '80%',
                    minHeight: '140px',
                    margin: '0 10% 2%',
                    padding: '1%'
                }}
                variant="outlined"
            >
                <MesasExamenesNovedadTable
                    novedad={ novedad }
                    handleFormValues={ handleFormValues }
                    handleDeleteRow={ handleDeleteRow }
                />
            </Paper>
        </Box>
    );
};

MesasExamenesNovedadesSave.propTypes = {
    novedad: PropTypes.array,
    setNovedad: PropTypes.func
}
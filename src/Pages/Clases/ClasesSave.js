import { Button, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { ClasesContext } from '../../Context/BuildContext';
import { useForm } from '../../Hooks/useForm';
import { useModal } from '../../Hooks/useModal';
import { cursosGetAll } from '../../Services/restCallCursos';
import { docentesGetAll } from '../../Services/restCallDocentes';
import { materiasGetAll } from '../../Services/restCallMaterias';
import { periodosGetAll } from '../../Services/restCallPeriodos';
import { AgregarPeriodos } from '../../Template/AgregarPeriodos';
import { claseModel } from '../../Utils/Model/claseModel';

export const ClasesSave = () => {
    const {
        active,
        handleAddclase,
        handleEditclase,
        handleBack,
        errors
    } = useContext(ClasesContext);

    const [
        formValues,
        handleInputChange, ,
        handleObjectChange
    ] = useForm( active );

    const [ cursosList, setCursosList ] = useState([]);
    const [ docentesList, setDocentesList ] = useState([]);
    const [ materiasList, setMateriasList ] = useState([]);
    const [ periodosList, setPeriodosList ] = useState([]);

    const [ isOpenModal, openModal, closeModal ] = useModal( false );

    const handleListGetAll = async () => {
        setCursosList( await cursosGetAll() );
        setDocentesList( await docentesGetAll() );
        setMateriasList( await materiasGetAll() );
        setPeriodosList( await periodosGetAll('CicloLectivo') );
    }

    useEffect(() => {
        handleListGetAll();
    }, [])
    

    const {
        docente,
        materia,
        periodo,
        curso,
        dias,
        horarioInicio,
        horarioFin
    } = formValues;
    
    return (
        <Paper sx={{ width: '60%', margin: '0 20% 2%', padding: '1%' }}>
            <Typography variant="h3" gutterBottom component="div">
                Clase
            </Typography>
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
                        id="dias"
                        name="dias"
                        value={ dias }
                        onChange={ handleInputChange }
                        InputLabelProps={!isOpenModal && { shrink: true, required: true }}
                        select
                        margin="normal"
                        label={!isOpenModal && "Dias"}
                        error={Boolean(errors?.dias)}
                        helperText={errors?.dias}
                    >
                        <MenuItem value="" disabled>
                            Seleccione un día
                        </MenuItem>
                        <MenuItem value="Domingo">Domingo</MenuItem>
                        <MenuItem value="Lunes">Lunes</MenuItem>
                        <MenuItem value="Martes">Martes</MenuItem>
                        <MenuItem value="Miercoles">Miercoles</MenuItem>
                        <MenuItem value="Jueves">Jueves</MenuItem>
                        <MenuItem value="Viernes">Viernes</MenuItem>
                        <MenuItem value="Sabado">Sabado</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        id="periodo"
                        name="periodo"
                        value={ periodo }
                        onChange={ handleObjectChange }
                        InputLabelProps={!isOpenModal && { shrink: true, required: true }}
                        select
                        margin="normal"
                        label={!isOpenModal && "Periodo" }
                        error={Boolean(errors?.periodo)}
                        helperText={errors?.periodo}
                    >
                        <MenuItem value="" disabled>
                            Seleccione un periodo
                        </MenuItem>
                        { periodosList.map(( p ) => (
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
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        id="horarioInicio"
                        name="horarioInicio"
                        value={ horarioInicio }
                        type="time"
                        onChange={ handleInputChange }
                        InputLabelProps={!isOpenModal && { shrink: true, required: true }}
                        margin="normal"
                        label={!isOpenModal && "Hora Inicio"}
                        error={Boolean(errors?.horarioInicio)}
                        helperText={errors?.horarioInicio}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        id="horarioFin"
                        name="horarioFin"
                        value={ horarioFin }
                        type="time"
                        onChange={ handleInputChange }
                        InputLabelProps={!isOpenModal && { shrink: true, required: true }}
                        margin="normal"
                        label={!isOpenModal && "Hora Fin" }
                        error={Boolean(errors?.horarioFin)}
                        helperText={errors?.horarioFin}
                    />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        id="curso"
                        name="curso"
                        value={ curso }
                        onChange={ handleObjectChange }
                        InputLabelProps={!isOpenModal && { shrink: true, required: true }}
                        select
                        margin="normal"
                        label={!isOpenModal && "Curso"}
                        error={Boolean(errors?.curso)}
                        helperText={errors?.curso}
                    >
                        <MenuItem value="" disabled>
                            Seleccione un curso
                        </MenuItem>
                        { cursosList.map((c) => (
                            <MenuItem key={ c.id } value={ c.id }>
                                { `${ c.aula_descripcion }` }
                            </MenuItem>
                        )) }
                    </TextField>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        id="docentes"
                        name="docente"
                        value={ docente }
                        onChange={ handleObjectChange }
                        InputLabelProps={!isOpenModal && { shrink: true, required: true }}
                        select
                        margin="normal"
                        label={!isOpenModal && "Docente" }
                        error={Boolean(errors?.docente)}
                        helperText={errors?.docente}
                    >
                        <MenuItem value="" disabled>
                            Seleccione un periodo
                        </MenuItem>
                        { docentesList.map((d) => (
                            <MenuItem key={ d.documento } value={ d.documento }>
                                { `${ d.nombre } ${ d.apellido }` }
                            </MenuItem>
                        )) }
                    </TextField>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        id="materias"
                        name="materia"
                        value={ materia }
                        onChange={ handleObjectChange }
                        InputLabelProps={!isOpenModal && { shrink: true, required: true }}
                        select
                        margin="normal"
                        label={!isOpenModal && "Materia" }
                        error={Boolean(errors?.materia)}
                        helperText={errors?.materia}
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
                <Grid item xs={6}>
                    {
                        active === claseModel
                        ? (
                            <Button
                                fullWidth
                                onClick={
                                    () => handleAddclase(formValues)
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
                                    () => handleEditclase(formValues)
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
    )
}

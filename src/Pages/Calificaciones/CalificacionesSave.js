import React, { useContext, useEffect, useState } from 'react';
import { Grid, MenuItem, Paper, TextField } from '@mui/material';
import { CalificacionesContext } from '../../Context/BuildContext';
import { useForm } from '../../Hooks/useForm';
import { alumnosGetAll } from '../../Services/restCallAlumnos';
import { docentesGetAll } from '../../Services/restCallDocentes';
import { materiasGetAll } from '../../Services/restCallMaterias';
import { regimenes } from '../../Utils/Model/materiaModel';
import {
    ButtonContained,
    ButtonOutlined,
    TypographyH4
} from '../../Components/GlobalStylesComponents/stylesComponents';

export const CalificacionesSave = () => {
    const {
        active,
        handleEditCalificacion,
        handleBack,
        errors
    } = useContext(CalificacionesContext);

    const [ alumnosList, setAlumnosList ] = useState([]);
    const [ materiasList, setMateriasList ] = useState([]);
    const [ docentesList, setDocentesList ] = useState([]);

    const handleListGetAll = async () => {
        setAlumnosList(await alumnosGetAll());
        setMateriasList(await materiasGetAll());
        setDocentesList(await docentesGetAll());
    }

    useEffect(() => {
        handleListGetAll();
    }, [])
    

    const [ formValues, handleInputChange ] = useForm( active );

    const {
        regimen,
        etapa,
        nota,
        descripcion,
        alumno_id,
        docente_id,
        materia_id,
    } = formValues;
    
    return (
        <Paper sx={{ width: '58%', margin: '0 20% 2%', padding: '1%' }} variant="outlined">
            <TypographyH4 label="Editar Calificacion" />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="regimen"
                        name="regimen"
                        value={regimen}
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true, required: true }}
                        select
                        margin="normal"
                        label="Regimen"
                        error={Boolean(errors?.regimen)}
                        helperText={errors?.regimen}
                    >
                        <MenuItem value="" disabled>
                            Seleccione un regimen
                        </MenuItem>
                        { regimenes.map((r) => (
                            <MenuItem key={r} value={r}>{r}</MenuItem>
                        )) }
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="etapa"
                        name="etapa"
                        value={etapa}
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true, required: true }}
                        select
                        margin="normal"
                        label="Etapa"
                        error={Boolean(errors?.etapa)}
                        helperText={errors?.etapa}
                    >
                        <MenuItem value="" disabled>
                            Seleccione una etapa
                        </MenuItem>
                        <MenuItem value="1">Primer Etapa</MenuItem>
                        <MenuItem value="2">Segunda Etapa</MenuItem>
                        <MenuItem value="3">Tercera Etapa</MenuItem>
                        <MenuItem value="4">Cuarta Etapa</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="nota"
                        name="nota"
                        value={nota}
                        type="number"
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true, required: true}}
                        InputProps={{ 
                            inputProps: {
                                min: 1, max: 10, step: 1
                            }
                        }}
                        margin="normal"
                        label="Nota"
                        error={Boolean(errors?.nota)}
                        helperText={errors?.nota}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="descripcion"
                        name="descripcion"
                        value={ descripcion }
                        onChange={ handleInputChange }
                        InputLabelProps={{ shrink: true, required: true }}
                        margin="normal"
                        label="Descripcion"
                        error={Boolean(errors?.descripcion)}
                        helperText={errors?.descripcion}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="alumno_id"
                        name="alumno_id"
                        defaultValue=""
                        value={ parseInt(alumno_id) }
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true, required: true }}
                        select
                        margin="normal"
                        label="Alumno"
                        error={Boolean(errors?.alumno_id)}
                        helperText={errors?.alumno_id}
                    >
                        <MenuItem value="" disabled>
                            Seleccione un alumno
                        </MenuItem>
                        { alumnosList.map((a) => (
                            <MenuItem key={a.documento} value={ parseInt(a.documento) }>
                                { `${ a.nombre } ${ a.apellido }` }
                            </MenuItem>
                        )) }
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="docente_id"
                        name="docente_id"
                        value={ docente_id }
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true, required: true }}
                        select
                        margin="normal"
                        label="Docente"
                        error={Boolean(errors?.docente_id)}
                        helperText={errors?.docente_id}
                    >
                        <MenuItem value="" disabled>
                            Seleccione un docente
                        </MenuItem>
                        { docentesList.map((d) => (
                            <MenuItem key={d.documento} value={ d.documento }>
                                { `${ d.nombre } ${ d.apellido }` }
                            </MenuItem>
                        )) }
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="materia_id"
                        name="materia_id"
                        value={ materia_id }
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true, required: true }}
                        select
                        margin="normal"
                        label="Materia"
                        error={Boolean(errors?.materia_id)}
                        helperText={errors?.materia_id}
                    >
                        <MenuItem value="" disabled>
                            Seleccione un docente
                        </MenuItem>
                        { materiasList.map((m) => (
                            <MenuItem key={m.id} value={ m.id }>
                                { `${ m.descripcion }` }
                            </MenuItem>
                        )) }
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <ButtonContained
                        CallBack={
                            () => handleEditCalificacion(formValues)
                        }
                        label="Editar"
                    />
                </Grid>
                <Grid item xs={12}>
                    <ButtonOutlined
                        CallBack={ handleBack }
                        label="Volver"
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

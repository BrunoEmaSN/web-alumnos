import React, { useContext } from 'react';
import { MateriasContext } from '../../Context/BuildContext';
import { useForm } from '../../Hooks/useForm';
import { regimenes } from '../../Utils/Model/materiaModel';
import { Button, Grid, MenuItem, TextField, Typography, Paper } from '@mui/material';

export const MateriasSave = () => {
    const {
        active,
        actions,
        action,
        handleAddMateria,
        handleEditMateria,
        handleBack,
        errors
    } = useContext(MateriasContext);

    const [ formValues, handleInputChange ] = useForm( active );

    const {
        descripcion,
        planEstudio,
        regimen
    } = formValues;

    return (
        <Paper sx={{ width: '60%', margin: '0 20% 2%', padding: '1%' }}>
            <Typography variant="h6" gutterBottom component="div">
                { action === actions.create ? 'Crear Nueva Materia' : 'Editar Materia' }
            </Typography>
            <Grid container spacing={2}>
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
                        id="planEstudio"
                        name="planEstudio"
                        value={planEstudio}
                        onChange={handleInputChange}
                        InputLabelProps={{ shrink: true, required: true }}
                        margin="normal"
                        label="Plan Estudio"
                        error={Boolean(errors?.planEstudio)}
                        helperText={errors?.planEstudio}
                    />
                </Grid>
                <Grid item xs={12}>
                    {
                        action === actions.create
                        ? (
                            <Button
                                fullWidth
                                onClick={
                                    () => handleAddMateria(formValues)
                                }
                                variant="contained"
                            >
                                Guardar
                            </Button>
                        )
                        :  (
                            <Button
                                fullWidth
                                onClick={
                                    () => handleEditMateria(formValues)
                                }
                                variant="contained"
                            >
                                Editar
                            </Button>
                        )
                    }
                </Grid>
                <Grid item xs={12}>
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
import React, { useContext } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { theme } from '../../Components/GlobalStylesComponents/theme';
import { MateriasContext } from '../../Context/BuildContext';
import { useForm } from '../../Hooks/useForm';
import { regimenes } from '../../Utils/Model/materiaModel';
import { Grid, MenuItem, TextField, Paper } from '@mui/material';
import {
    ButtonContained,
    ButtonOutlined,
    TypographyH4
} from '../../Components/GlobalStylesComponents/stylesComponents';

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

    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

    const {
        descripcion,
        planEstudio,
        regimen
    } = formValues;

    return (
        <Paper
            sx={{
                width: isMdUp ? '58%' : '100%',
                margin: isMdUp ? '0 20% 2%' : 0,
                padding: '1%'
            }} 
            variant="outlined"
        >
            <TypographyH4
                label={
                    action === actions.create
                    ? 'Crear Nueva Materia'
                    : 'Editar Materia'
                }
            />
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
                            <ButtonContained
                                CallBack={
                                    () => handleAddMateria(formValues)
                                }
                                label="Guardar"
                            />
                        )
                        :  (
                            <ButtonContained
                                CallBack={
                                    () => handleEditMateria(formValues)
                                }
                                label="Editar"
                            />
                        )
                    }
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
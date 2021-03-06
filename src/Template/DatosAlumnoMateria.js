import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal/lib/components/Modal';
import { materiasGetAll } from '../Services/restCallMaterias';
import { customStyles } from '../Utils/modalStyles';
import { Button, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { CardGeneric } from '../Components/Card/CardGeneric';

export const DatosAlumnoMateria = ({ materias, handleInputChange }) => {

    const [ materia, setMateria ] = useState('');

    const [materiasList, setMateriasList] = useState([]);

    const [ estado, setEstado ] = useState('');

    const [ modalMateriaIsOpen, setmodalMateriaIsOpen ] = useState(false);

    const handleMateriasGetAll = async () => {
        setMateriasList( await materiasGetAll() );
    }

    useEffect(() => {
        handleMateriasGetAll();
    }, []);

    const openModalMateria = () => {
        setmodalMateriaIsOpen( true );
    }

    const closeModalMateria = () => {
        setmodalMateriaIsOpen( false );
    }

    const handleChageMateria = ({ target }) => {
        setMateria( JSON.parse( target.value ) );
    }

    const handleEstado = ({ target }) => {
        setEstado( target.value );
    }

    const handleAddMateria = () => {
        const isExist = materias.find( m => m.id === parseInt( materia.id ) );
        setMateria('');
        setEstado('');

        if( isExist ){
            closeModalMateria();
            return console.log('materia ya asignada al alumno');
        }

        handleInputChange({
            target: {
                name: 'materias',
                value: [ ...materias, { ...materia, estado } ]
            }
        });

        closeModalMateria();
    }

    const removeMateria = ( idMateria ) => {
        const filterMaterias = materias.filter( m => m.id !== parseInt( idMateria ) );
        handleInputChange({
            target: {
                name: 'materias',
                value: [ ...filterMaterias ]
            }
        })
    }

    return (
        <Box>
            <Paper
                sx={{
                    width: '60%',
                    margin: '0 20% 2%',
                    padding: '1%'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        '& > :not(style)': {
                            m: 1,
                        },
                    }}
                >
                    <Typography variant="h4" gutterBottom component="div">
                        Materias
                    </Typography>
                    <Button onClick={ openModalMateria }>
                        Agregar Materia
                    </Button>
                </Box>
                <Box
                    id="materias"
                    name="materias"
                    sx={{
                        display: 'flex',
                        minHeight: '140px',
                        border: '1px solid black',
                        borderRadius: '4px',
                        '& > :not(style)': {
                            m: 1,
                        },
                    }}
                >
                    {
                        materias && materias.map( m => 
                            <CardGeneric
                                key={ m.id }
                                titulo={ m.descripcion }
                                descripcion={ m.estado }
                                id={ m.id }
                                removeCard={ removeMateria }
                            />
                        )
                    }
                </Box>
            </Paper>
            <Modal
                isOpen={ modalMateriaIsOpen }
                style={ customStyles }
                onRequestClose={ closeModalMateria }
                ariaHideApp={false}
            >
                <Typography variant="h6" gutterBottom component="div">
                    Materias
                </Typography>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <TextField
                            //error
                            fullWidth
                            id="materias"
                            name="materia"
                            value={ materia !== '' ? JSON.stringify(materia) : '' }
                            onChange={ handleChageMateria }
                            InputLabelProps={{ shrink: true, required: true }}
                            select
                            margin="normal"
                            label="Materia"
                            //helperText="Please select your currency"
                            >
                                <MenuItem value="" disabled>Seleccione una opcion</MenuItem>
                                {
                                    materiasList.map( m => (
                                        <MenuItem
                                            key={ m.id }
                                            value={ JSON.stringify( m ) }
                                        >
                                            { m.descripcion }
                                        </MenuItem>
                                    ))
                                }
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            //error
                            fullWidth
                            id="estado"
                            name="estado"
                            value={ estado }
                            onChange={ handleEstado }
                            InputLabelProps={{ shrink: true, required: true }}
                            select
                            margin="normal"
                            label="Estado"
                            //helperText="Please select your currency"
                            >
                                <MenuItem value="" disabled>
                                    Seleccione una opcion
                                </MenuItem>
                                <MenuItem value="regular">Regular</MenuItem>
                                <MenuItem value="libre">Libre</MenuItem>
                                <MenuItem value="promocional">
                                    Promocional
                                </MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            onClick={ handleAddMateria }
                            variant="contained"
                        >
                            Agregar
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: '2%' }}>
                        <Button
                            fullWidth
                            onClick={ closeModalMateria }
                            variant="outlined"
                        >
                            Close
                        </Button>
                    </Grid>
                </Grid>
            </Modal>
        </Box>
    );
};

DatosAlumnoMateria.propTypes = {
    materias: PropTypes.array.isRequired,
    handleInputChange: PropTypes.func.isRequired
}
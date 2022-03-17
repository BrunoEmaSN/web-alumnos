import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal/lib/components/Modal';
import { tutoresGetOne } from '../Services/restCallTutores';
import { customStyles } from '../Utils/modalStyles';
import { tutorFormatter } from '../Utils/Model/tutorModel';
import { CardGeneric } from '../Components/Card/CardGeneric';
import { Box } from '@mui/system';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';

export const DatosAlumnoTutores = ({ tutores, handleInputChange }) => {

    const [ documentoTutor, setDocumentoTutor ] = useState('');

    const [ tutor, setTutor ] = useState(null);

    const [ parentesco, setParentesco ] = useState('');

    const [ modalTutorIsOpen, setModalTutorIsOpen ] = useState(false);

    const openModalTutor = () => {
        setModalTutorIsOpen( true );
    }

    const closeModalTutor = () => {
        setModalTutorIsOpen( false );
    }

    const handleDocumentoTutor = ({ target }) => {
        setDocumentoTutor( target.value );
    }

    const findTutor = async () => {
        const result = await tutoresGetOne( parseInt( documentoTutor ) );
        setTutor( tutorFormatter( result ) );
    }

    const handleParentesco = ({ target }) => {
        setParentesco( target.value );
    }

    const handleAddTutor = async () => {
        const isExist = tutores.find( t => t.documento === parseInt( tutor.documento ) );
        setParentesco('');
        setDocumentoTutor('');

        if( isExist ){
            closeModalTutor();
            return console.log( 'tutor ya asignado al alumno' );
        }

        handleInputChange({
            target: {
                name: 'tutores',
                value: [...tutores, {...tutor, parentesco }]
            }
        });
        
        closeModalTutor();
    }

    const removeTutor = ( documentoT ) => {
        const filterTutores = tutores.filter( t => t.documento !== parseInt( documentoT ) );
        handleInputChange({
            target: {
                name: 'tutores',
                value: [ ...filterTutores ]
            }
        });
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
                        Tutores
                    </Typography>
                    <Button onClick={ openModalTutor }>
                        Agregar Tutor
                    </Button>
                </Box>
                <Box
                    id="tutores"
                    name="tutores"
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
                        tutores && tutores.map( t => (
                            <CardGeneric
                                key={ t.documento }
                                titulo={ t.parentesco }
                                descripcion={ `${ t.nombre } ${ t.apellido }` }
                                id={ t.documento }
                                removeCard={ removeTutor }
                            />
                        ))
                    }
                </Box>
            </Paper>
            <Modal
                isOpen={ modalTutorIsOpen }
                style={ customStyles }
                onRequestClose={ closeModalTutor }
                ariaHideApp={false}
            >
                <Typography variant="h6" gutterBottom component="div">
                    Tutores
                </Typography>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={10}>
                        <TextField
                            //error
                            fullWidth
                            type="number"
                            name="documentoTutor"
                            value={ documentoTutor }
                            onChange={ handleDocumentoTutor }
                            InputLabelProps={{ shrink: true, required: true }}
                            margin="normal"
                            label="Documento"
                            //helperText="Incorrect entry."
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            variant="contained"
                            onClick={ findTutor }
                            size="large"
                        >
                            Buscar
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        {
                            tutor && (
                                <Typography variant="h6">
                                    {`${ tutor.nombre } ${ tutor.apellido }`}
                                </Typography>
                            )
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            //error
                            fullWidth
                            name="parentesco"
                            value={ parentesco }
                            onChange={ handleParentesco }
                            InputLabelProps={{ shrink: true, required: true }}
                            margin="normal"
                            label="Parentesco"
                            //helperText="Incorrect entry."
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            onClick={ handleAddTutor }
                            variant="contained"
                        >
                            Agregar
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: '2%' }}>
                        <Button
                            fullWidth
                            onClick={ closeModalTutor }
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

DatosAlumnoTutores.propTypes = {
    tutores: PropTypes.array.isRequired,
    handleInputChange: PropTypes.func.isRequired,
}
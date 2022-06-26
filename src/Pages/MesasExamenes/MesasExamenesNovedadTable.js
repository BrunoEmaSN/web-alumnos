import React from 'react';
import PropTypes from 'prop-types';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';
import { Button, ButtonGroup } from '@mui/material';

export const MesasExamenesNovedadTable = ({ novedad, handleFormValues, handleDeleteRow }) => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Materias</TableCell>
                            <TableCell>Fechas</TableCell>
                            <TableCell>Llamados</TableCell>
                            <TableCell>Examinador 1</TableCell>
                            <TableCell>Examinador 2</TableCell>
                            <TableCell>Examinador 3</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {novedad.map((n) => (
                            <TableRow
                                key={ novedad.indexOf( n ) }
                                sx={{
                                    '&:last-child td, &:last-child th':{
                                        border: 0
                                    }
                                }}
                            >
                                <TableCell>{n.materia_descripcion}</TableCell>
                                <TableCell>{moment(n.fecha).format('yyyy-MM-DD')}</TableCell>
                                <TableCell>{n.llamado}</TableCell>
                                <TableCell>{`${n.examinador1}`}</TableCell>
                                <TableCell>{`${n.examinador2}`}</TableCell>
                                <TableCell>{`${n.examinador3}`}</TableCell>
                                <TableCell>
                                    <ButtonGroup
                                        orientation="vertical"
                                        aria-label="vertical outlined button group"
                                    >
                                        <Button
                                            onClick={() => handleFormValues(n)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            onClick={() => handleDeleteRow(n)}
                                        >
                                            Delete
                                        </Button>
                                    </ButtonGroup>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

MesasExamenesNovedadTable.propTypes = {
    novedad: PropTypes.array,
    handleFormValues: PropTypes.func,
    handleDeleteRow: PropTypes.func
}
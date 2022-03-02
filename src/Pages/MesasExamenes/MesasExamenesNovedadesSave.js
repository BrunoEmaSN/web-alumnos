import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useForm } from "../../Hooks/useForm";
import { Docente2 } from "../../Utils/docenteModel";
import { Materia2 } from "../../Utils/materiaModel";
import { Llamado1 } from "../../Utils/mesaExamenModel";

const initialState = {
  materias: '',
  fechas: '',
  llamados: '',
  examinador1: '',
  examinador2: '',
  examinador3: ''
};

export const MesasExamenesNovedadesSave = ({ novedad, setNovedad }) => {
  const [
    formValues,
    handleInputChange, ,
    handleObjectChange, ,
    setFormValues
  ] = useForm( initialState );
  const [ rowId, setRowId ] = useState('');
  const {
    materias,
    fechas,
    llamados,
    examinador1,
    examinador2,
    examinador3
  } = formValues;

  const handleAddOrEditRows = () => {
    if(rowId === ''){
      const lastIndex = novedad.length - 1;
      const lastId = novedad.length > 0 ? novedad[lastIndex].id : 0;
      setNovedad(
        (prevState) => (
          [
            ...prevState,
            { id: lastId + 1, ...formValues }
          ]
        )
      );
    }
    else {
      setNovedad(
        (prevState) => (
          prevState.map((state) => (
            state.id === rowId
            ? { id: rowId, ...formValues }
            : state
          ))
        )
      );
    }
    setRowId('');
    setFormValues(initialState);
  }

  const handleFormValues = (row) => {
    setRowId(row.id);
    setFormValues({
      materias: row.materias,
      fechas: row.fechas,
      llamados: row.llamados,
      examinador1: row.examinador1,
      examinador2: row.examinador2,
      examinador3: row.examinador3
    });
  }
  
  return (
    <div>
      <div>
        <label htmlFor="materias">Materias</label>
        <select id="materias" name="materias" value={ materias !== '' ? JSON.stringify( materias ) : '' } onChange={ handleObjectChange }>
          <option value="" disabled>Seleccione una Materia</option>
          {Materia2.map((m) => (
            <option key={ m.id } value={ JSON.stringify( m ) }>{ m.descripcion }</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="fechas">Fechas</label>
        <input type="date" name="fechas" value={ fechas } onChange={ handleInputChange }/>
      </div>
      <div>
        <label htmlFor="llamados">Llamados</label>
        <select id="llamados" name="llamados" value={ llamados } onChange={ handleInputChange }>
          <option value="" disabled>Seleccione un Llamado</option>
          {Llamado1.map((l) => (
            <option key={ l } value={ l }>{ l }</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="examinador1">Examinador 1</label>
        <select id="examinador1" name="examinador1" value={ examinador1 !== '' ? JSON.stringify( examinador1 ) : '' } onChange={ handleObjectChange }>
          <option value="" disabled>Seleccione un Examinador</option>
          {Docente2.map((d) => (
            <option key={d.documento} value={JSON.stringify( d )}>{`${d.apellido} ${d.nombre}`}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="examinador2">Examinador 2</label>
        <select id="examinador2" name="examinador2" value={ examinador2 !== '' ? JSON.stringify( examinador2 ) : ''  } onChange={ handleObjectChange }>
          <option value="" disabled>Seleccione un Examinador</option>
          {Docente2.map((d) => (
            <option key={d.documento} value={JSON.stringify(d)}>{`${d.apellido} ${d.nombre}`}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="examinador3">Examinador 3</label>
        <select id="examinador3" name="examinador3" value={ examinador3 !== '' ? JSON.stringify( examinador3 ) : ''  } onChange={ handleObjectChange }>
          <option value="" disabled>Seleccione un Examinador</option>
          {Docente2.map((d) => (
            <option key={d.documento} value={JSON.stringify(d)}>{`${d.apellido} ${d.nombre}`}</option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={handleAddOrEditRows}>Agregar</button>
      </div>
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
                  key={n.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{n.materias.descripcion}</TableCell>
                  <TableCell>{n.fechas}</TableCell>
                  <TableCell>{n.llamados}</TableCell>
                  <TableCell>{`${n.examinador1.apellido} ${n.examinador1.nombre}`}</TableCell>
                  <TableCell>{`${n.examinador2.apellido} ${n.examinador2.nombre}`}</TableCell>
                  <TableCell>{`${n.examinador3.apellido} ${n.examinador3.nombre}`}</TableCell>
                  <TableCell>
                    <button onClick={() => handleFormValues(n)}>Edit</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

MesasExamenesNovedadesSave.propTypes = {
  novedad: PropTypes.array.isRequired,
  setNovedad: PropTypes.func.isRequired
}
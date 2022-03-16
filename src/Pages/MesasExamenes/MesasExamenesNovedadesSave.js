import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import { useForm } from "../../Hooks/useForm";
import { materiasGetAll } from '../../Services/restCallMaterias';

import { MesasExamenesNovedadTable } from './MesasExamenesNovedadTable';
import { llamadosList } from '../../Utils/Model/mesaExamenModel';

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

  const handleEditRow = () => {
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
      (prevState) => {
        return prevState.filter(s => JSON.stringify( s ) !== JSON.stringify( row ))
      }
      
    );
  }
  
  return (
    <div>
      <div>
        <label htmlFor="materia_id">Materia</label>
        <select
          id="materia_id"
          name="materia_id"
          value={ materia_id }
          onChange={ handleMateriaChange }
        >
          <option value="" disabled>Seleccione una Materia</option>
          { materiasList.map((m) => (
            <option key={ m.id } value={ m.id }>
              { m.descripcion }
            </option>
          )) }
        </select>
      </div>
      <div>
        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={ fecha }
          onChange={ handleInputChange }
        />
      </div>
      <div>
        <label htmlFor="llamado">Llamados</label>
        <select
          id="llamado"
          name="llamado"
          value={ llamado }
          onChange={ handleInputChange }
        >
          <option value="" disabled>
            Seleccione un Llamado
          </option>
          { llamadosList.map((l) => (
            <option key={ l } value={ l }>
              { l }
            </option>
          )) }
        </select>
      </div>

      <div>
        <label htmlFor="examinador1">Examinador 1</label>
        <input
          type="text"
          id="examinador1"
          name="examinador1"
          value={ examinador1 }
          onChange={ handleInputChange }
        />
      </div>
      <div>
        <label htmlFor="examinador2">Examinador 2</label>
        <input
          type="text"
          id="examinador2"
          name="examinador2"
          value={ examinador2 }
          onChange={ handleInputChange }
        />
      </div>
      <div>
        <label htmlFor="examinador3">Examinador 3</label>
        <input
          type="text"
          id="examinador3"
          name="examinador3"
          value={ examinador3 }
          onChange={ handleInputChange }
        />
      </div>

      <div>
        {
          action === actionsList.create
          ? (
            <button onClick={ handleAddRow }>
              Agregar
            </button>
          )
          : (
            <button onClick={ handleEditRow }>
              Editar
            </button>
          )
        }
        
      </div>

      <MesasExamenesNovedadTable
        novedad={ novedad }
        handleFormValues={ handleFormValues }
        handleDeleteRow={ handleDeleteRow }
      />
    </div>
  );
};

MesasExamenesNovedadesSave.propTypes = {
  novedad: PropTypes.array,
  setNovedad: PropTypes.func
}
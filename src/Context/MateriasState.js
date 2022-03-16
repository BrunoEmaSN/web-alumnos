import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MateriasContext } from './BuildContext';
import { useDispatch, useSelector } from 'react-redux';
import {
    activeMateria,
    cleanActiveMateria,
    startDeletingMateria,
    startLoadingMaterias,
    startNewMateria,
    startSetActive,
    startUpdateMateria
} from '../Store/Materia/Actions/Materia';
import { materiaModel } from '../Utils/Model/materiaModel';

export const MateriasState = ({ children }) => {
    const dispatch = useDispatch();

    const { materias, active } = useSelector( state => state.materia );

    useEffect(() => {
        dispatch( startLoadingMaterias() );
    }, []);

    const handleCreate = () => {
        dispatch( activeMateria( materiaModel ) );
    }
    const handleEdit = ( id ) => {
        dispatch( startSetActive( id ) );
    }
    const handleDelete = ( id) => {
        dispatch( startDeletingMateria( id) );
    }

    const handleAddMateria = ( formValues ) => {
        dispatch( startNewMateria( formValues ) );
        dispatch( cleanActiveMateria() );
    }
    const handleEditMateria = (formValues) => {
        dispatch( startUpdateMateria( formValues ) );
        dispatch( cleanActiveMateria() );
    }
    const handleBack = () => {
        dispatch( cleanActiveMateria() );
    }

    return (
        <MateriasContext.Provider value={{
            materias,
            active,
            handleCreate,
            handleEdit,
            handleDelete,
            handleAddMateria,
            handleEditMateria,
            handleBack
        }}>
            {children}
        </MateriasContext.Provider>
    )
}

MateriasState.propTypes = {
    children: PropTypes.element
}
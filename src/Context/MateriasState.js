import React, { useEffect, useState } from 'react';
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
import { useIsValidate } from '../Hooks/useIsValidate';

const initialState = {
    descripcion: '',
    regimen: '',
    planEstudio: '',
}

export const MateriasState = ({ children }) => {
    const dispatch = useDispatch();

    const actions = {
        create: 'Create',
        edit: 'Edit'
    };

    const { materias, active } = useSelector( state => state.materia );
    const [ action, setAction ] = useState(actions.create);
    const [ errors, setErrors ] = useState(initialState);
    const [ handleValidateString ] = useIsValidate();

    useEffect(() => {
        dispatch( startLoadingMaterias() );
    }, []);

    const handleCreate = () => {
        setAction( actions.create );
        dispatch( activeMateria( materiaModel ) );
    }
    const handleEdit = ( id ) => {
        setAction( actions.edit );
        dispatch( startSetActive( id ) );
    }
    const handleDelete = ( id) => {
        dispatch( startDeletingMateria( id) );
    }

    const handleAddMateria = ( formValues ) => {
        if(handleErrors(formValues)){
            dispatch( startNewMateria( formValues ) );
            dispatch( cleanActiveMateria() );
        }
    }
    const handleEditMateria = (formValues) => {
        if(handleErrors(formValues)){
            dispatch( startUpdateMateria( formValues ) );
            dispatch( cleanActiveMateria() );
        }
    }
    const handleBack = () => {
        resetErrors();
        dispatch( cleanActiveMateria() );
    }

    const handleErrors = (formValues) => {
        let isValid = true;
        let newState = initialState;

        if(!handleValidateString(formValues.descripcion)){
            isValid = false;
            newState = {...newState, descripcion: 'es necesario una descripcion'};
        }
        if(!handleValidateString(formValues.regimen)){
            isValid = false;
            newState = {...newState, regimen: 'tiene que selecionar un regimen'};
        }
        if(!handleValidateString(formValues.planEstudio)){
            isValid = false;
            newState = {...newState, planEstudio: 'es necesario un planEstudio'};
        }

        setErrors(newState);
        return isValid;
    }

    const resetErrors = () => {
        setErrors(initialState);
    }

    return (
        <MateriasContext.Provider value={{
            materias,
            active,
            actions,
            action,
            handleCreate,
            handleEdit,
            handleDelete,
            handleAddMateria,
            handleEditMateria,
            handleBack,
            errors
        }}>
            {children}
        </MateriasContext.Provider>
    )
}

MateriasState.propTypes = {
    children: PropTypes.element
}
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CursosContext } from './BuildContext';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../Hooks/useModal';
import {
    activeCurso,
    cleanActiveCurso,
    startDeletingCurso,
    startLoadingCursos,
    startNewCurso,
    startSetActive,
    startUpdateCurso
} from '../Store/Curso/Actions/Curso';
import { cursoModel } from '../Utils/Model/cursoModel';
import { useIsValidate } from '../Hooks/useIsValidate';

const initialState = {
    nivel: '',
    turno: '',
    gradoAno: '',
    division: '',
    aula: ''
}

export const CursosState = ({ children }) => {
    const dispatch = useDispatch();

    const actions = {
        create: 'Create',
        edit: 'Edit'
    };

    const { cursos, active } = useSelector( state => state.curso );
    const [ isOpenModal, openModal, closeModal ] = useModal( false );
    const [ action, setAction ] = useState(actions.create);
    const [ errors, setErrors ] = useState(initialState);
    const [ handleValidateString, handleValidateInterger ] = useIsValidate();

    useEffect(() => {
        dispatch( startLoadingCursos() );
    }, [dispatch]);

    const handleCreate = () => {
        setAction( actions.create );
        dispatch( activeCurso( cursoModel ) );
        openModal();
    }

    const handleUpdate = ( c ) => {
        setAction( actions.edit );
        dispatch( startSetActive( c ) );
        openModal();
    }

    const handleDelete = ( id ) => {
        dispatch( startDeletingCurso( id ) );
    }

    const handleAddCurso = (formValues) => {
        if(handleErrors(formValues)){
            dispatch( startNewCurso( formValues ) );
            dispatch( cleanActiveCurso() );
            closeModal()
        }
    }

    const handleEditCurso = (formValues) => {
        if(handleErrors(formValues)){
            dispatch( startUpdateCurso( formValues ) );
            dispatch( cleanActiveCurso() );
            closeModal();
        }
    }

    const handleErrors = (formValues) => {
        let isValid = true;
        let newState = initialState;

        if(!handleValidateString(formValues.nivel)){
            isValid = false;
            newState = {...newState, nivel: 'tiene que selecionar un nivel'};
        }
        if(!handleValidateString(formValues.turno)){
            isValid = false;
            newState = {...newState, turno: 'tiene que selecionar un turno'};
        }
        if(!handleValidateString(formValues.division)){
            isValid = false;
            newState = {...newState, division: 'es necesario la division'};
        }
        if(!handleValidateInterger(formValues.gradoAno)){
            isValid = false;
            newState = {...newState, gradoAno: 'es necesario el Grado o Año'};
        }
        if(formValues.aula === ''){
            isValid = false;
            newState = {...newState, aula: 'tiene que selecionar un aula'};
        }

        setErrors(newState);
        return isValid;
    }

    const resetErrors = () => {
        setErrors(initialState);
    }

    return (
        <CursosContext.Provider value={{
            cursos,
            active,
            actions,
            action,
            isOpenModal,
            openModal,
            closeModal,
            handleCreate,
            handleUpdate,
            handleDelete,
            handleAddCurso,
            handleEditCurso,
            errors,
            resetErrors
        }}>
            {children}
        </CursosContext.Provider>
    )
}

CursosState.propTypes = {
    children: PropTypes.element
}
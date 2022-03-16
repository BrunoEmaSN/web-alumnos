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

export const CursosState = ({ children }) => {
    const dispatch = useDispatch();

    const actions = {
        create: 'Create',
        edit: 'Edit'
    };

    const { cursos, active } = useSelector( state => state.curso );
    const [ isOpenModal, openModal, closeModal ] = useModal( false );
    const [ action, setAction ] = useState(actions.create);

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
        dispatch( startNewCurso( formValues ) );
        dispatch( cleanActiveCurso() );
        closeModal()
    }

    const handleEditCurso = (formValues) => {
        dispatch( startUpdateCurso( formValues ) );
        dispatch( cleanActiveCurso() );
        closeModal();
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
            handleEditCurso
        }}>
            {children}
        </CursosContext.Provider>
    )
}

CursosState.propTypes = {
    children: PropTypes.element
}
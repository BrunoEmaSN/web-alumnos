import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../Hooks/useModal';
import {
    activeAula,
    cleanActiveAula,
    startDeletingAula,
    startLoadingAulas,
    startNewAula,
    startUpdateAula
} from '../Store/Aula/Actions/Aula';
import { aulaModel } from '../Utils/Model/aulaModel';
import { AulasContext } from './BuildContext';

export const AulasState = ({ children }) => {
    const dispatch = useDispatch();

    const actions = {
        create: 'Create',
        edit: 'Edit'
    };

    const { aulas, active } = useSelector( state => state.aula );
    const [ action, setAction ] = useState(actions.create);
    const [ isOpenModal, openModal, closeModal ] = useModal( false );

    useEffect(() => {
        dispatch( startLoadingAulas() );
    }, [dispatch]);

    const handleCreate = () => {
        setAction( actions.create );
        dispatch( activeAula( aulaModel ) );
        openModal();
    }

    const handleUpdate = ( a ) => {
        setAction( actions.edit );
        dispatch( activeAula( a ) );
        openModal();
    }

    const handleDelete = ( id ) => {
        dispatch( startDeletingAula( id ) );
    }

    const handleAddAula = (formValues) => {
        dispatch( startNewAula( formValues ) );
        dispatch( cleanActiveAula() );
        closeModal()
    }

    const handleEditAula = (formValues) => {
        dispatch( startUpdateAula( formValues ) );
        dispatch( cleanActiveAula() );
        closeModal();
    }

    return (
        <AulasContext.Provider value={{
            aulas,
            active,
            actions,
            action,
            isOpenModal,
            openModal,
            closeModal,
            handleCreate,
            handleUpdate,
            handleDelete,
            handleAddAula,
            handleEditAula
        }}>
            { children }
        </AulasContext.Provider>
    )
}

AulasState.propTypes = {
    children: PropTypes.element
}
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
import { useIsValidate } from '../Hooks/useIsValidate';
import { aulasGetOne } from '../Services/restCallAulas';

const initialState = {
    descripcion: '',
    capacidad: ''
}

export const AulasState = ({ children }) => {
    const dispatch = useDispatch();

    const actions = {
        create: 'Create',
        edit: 'Edit'
    };

    const { aulas, active } = useSelector( state => state.aula );
    const [ action, setAction ] = useState(actions.create);
    const [ isOpenModal, openModal, closeModal ] = useModal( false );
    const [ data, setData ] = useState(false);
    const [ isOpenModalView, openModalView, closeModalView ] = useModal( false );
    const [ errors, setErrors ] = useState(initialState);
    const [ handleValidateString, handleValidateInterger ] = useIsValidate();

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

    const handleView = async (id) => {
        const newData = await aulasGetOne(id);
        setData( Object.entries(newData) );
        openModalView();
    }

    const handleAddAula = (formValues) => {
        if(handleErrors(formValues)){
            dispatch( startNewAula( formValues ) );
            dispatch( cleanActiveAula() );
            closeModal()
        }
    }

    const handleEditAula = (formValues) => {
        if(handleErrors(formValues)){
            dispatch( startUpdateAula( formValues ) );
            dispatch( cleanActiveAula() );
            closeModal();
        }
    }

    const handleErrors = (formValues) => {
        let isValid = true;
        let newState = initialState;
        if(!handleValidateString(formValues.descripcion)){
            isValid = false
            newState = {...newState, descripcion: 'es necesario una descripcion'};
        }
        if(!handleValidateInterger(formValues.capacidad)){
            isValid = false;
            newState = {...newState, capacidad: 'es necesario la capacidad'}
        }
        setErrors(newState);
        return isValid;
    }

    const resetErrors = () => {
        setErrors(initialState);
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
            handleEditAula,
            errors,
            resetErrors,
            isOpenModalView,
            handleView,
            closeModalView,
            data
        }}>
            { children }
        </AulasContext.Provider>
    )
}

AulasState.propTypes = {
    children: PropTypes.element
}
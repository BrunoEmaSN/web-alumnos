import React, { useEffect } from 'react';
import PropTyes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import {
    activeClase,
    cleanActiveClase,
    startDeletingClase,
    startLoadingClases,
    startNewClase,
    startSetActive,
    startUpdateClase
} from '../Store/Clase/Actions/Clase';
import { claseModel } from '../Utils/Model/claseModel';
import { ClasesContext } from './BuildContext';

export const ClasesState = ({ children }) => {
    const dispatch = useDispatch();

	const { clases, active } = useSelector( state => state.clase );

    useEffect(() => {
        dispatch( startLoadingClases() );
    }, []);

	const handleCreate = () => {
		dispatch(activeClase(claseModel));
	}

	const handleEdit = (id) => {
		dispatch(startSetActive(id));
	}

	const handleDelete = (id) => {
		dispatch(startDeletingClase(id));
	}

    const handleAddclase = (formValues) => {
        dispatch( startNewClase( formValues ) );
        dispatch( cleanActiveClase() );
    }

    const handleEditclase = (formValues) => {
        dispatch( startUpdateClase( formValues ) );
        dispatch( cleanActiveClase() );
    }

    const handleBack = ( e ) => {
        e.preventDefault();
        dispatch( cleanActiveClase() );
    }
    return (
        <ClasesContext.Provider value={{
            clases,
            active,
            handleCreate,
            handleEdit,
            handleDelete,
            handleAddclase,
            handleEditclase,
            handleBack
        }}>
            {children}
        </ClasesContext.Provider>
    )
}

ClasesState.propTypes = {
    children: PropTyes.element
}
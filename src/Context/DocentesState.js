import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { DocentesContext } from './BuildContext';
import { useDispatch, useSelector } from 'react-redux';
import { activeDocente, cleanActiveDocente, startDeletingDocente, startLoadingDocentes, startNewDocente, startSetActive, startUpdateDocente } from '../Store/Docente/Actions/Docente';
import { docenteModel } from '../Utils/Model/docenteModel';

export const DocentesState = ({ children }) => {
    const dispatch = useDispatch();

    const { docentes, active } = useSelector( state => state.docente );

    useEffect(() => {
        dispatch( startLoadingDocentes() );
    }, []);

    const handleCreate = () => {
        dispatch( activeDocente( docenteModel ) );
    }
    const handleEdit = ( documento ) => {
        dispatch( startSetActive( documento ) );
    }
    const handleDelete = ( documento ) => {
        dispatch( startDeletingDocente( documento ) );
    }

    const handleAddDocente = ( formValues ) => {
        dispatch( startNewDocente( formValues ) );
        dispatch( cleanActiveDocente() );
    }
    const handleEditDocente = ( formValues ) => {
        dispatch( startUpdateDocente( formValues ) );
        dispatch( cleanActiveDocente() );
    }
    const handleBack = () => {
        dispatch( cleanActiveDocente() );
    }

    return (
        <DocentesContext.Provider value={{
            docentes,
            active,
            handleCreate,
            handleEdit,
            handleDelete,
            handleAddDocente,
            handleEditDocente,
            handleBack           
        }}>
            {children}
        </DocentesContext.Provider>
    )
}

DocentesState.propTypes = {
    children: PropTypes.element
}
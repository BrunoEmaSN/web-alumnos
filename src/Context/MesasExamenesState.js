import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MesasExamenesContext } from './BuildContext';
import { useDispatch, useSelector } from 'react-redux';
import { activeMesaExamen, cleanActiveMesaExamen, startDeletingMesaExamen, startLoadingMesasExamenes, startNewMesaExamen, startSetActive, startUpdateMesaExamen } from '../Store/MesaExamen/Actions/MesaExamen';
import { mesaExamenModel } from '../Utils/Model/mesaExamenModel';

export const MesasExamenesState = ({ children }) => {
    const dispatch = useDispatch();

    const { mesasExamenes, active } = useSelector( state => state.mesaExamen );
    
    useEffect(() => {
        dispatch( startLoadingMesasExamenes() );
    }, []);

    const handleCreate = () => {
        dispatch( activeMesaExamen( mesaExamenModel ) );
    }
    const handleEdit = ( m ) => {
        dispatch( startSetActive( m ) );
    }
    const handleDelete = ( id) => {
        dispatch( startDeletingMesaExamen( id) );
    }

    const handleAddMesaExamen = (formValues, novedad) => {
        dispatch( startNewMesaExamen( { maestro: formValues, novedad } ) );
        dispatch( cleanActiveMesaExamen() );
    }

    const handleEditMesaExamen = (formValues, novedad) => {
        dispatch( startUpdateMesaExamen( { maestro: formValues, novedad } ) );
        dispatch( cleanActiveMesaExamen() );
    }

    const handleBack = () => {
        dispatch( cleanActiveMesaExamen() );
    }

    return (
        <MesasExamenesContext.Provider value={{
            mesasExamenes,
            active,
            handleCreate,
            handleEdit,
            handleDelete,
            handleAddMesaExamen,
            handleEditMesaExamen,
            handleBack
        }}>
            {children}
        </MesasExamenesContext.Provider>
    )
}

MesasExamenesState.propTypes = {
    children: PropTypes.element
}
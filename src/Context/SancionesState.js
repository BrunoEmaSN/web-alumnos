import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SancionesContext } from './BuildContext';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../Hooks/useModal';
import {
    cleanActiveSancion,
    startLoadingSanciones,
    startSetActive,
    startUpdateSancion
} from '../Store/Sancion/Actions/Sancion';

export const SancionesState = ({children}) => {
    const dispatch = useDispatch();

    const { sanciones, active } = useSelector( state => state.sancion );
    const [ isOpenModal, openModal, closeModal ] = useModal( false );

    useEffect(() => {
        dispatch( startLoadingSanciones() );
    }, [dispatch]);

    const handleUpdate = ( sancion ) => {
        dispatch( startSetActive( sancion ) );
        openModal();
    }

    const handleEditSancion = (formValues) => {
        dispatch( startUpdateSancion( formValues ) );
        dispatch( cleanActiveSancion() );
        closeModal();
    }

    return (
        <SancionesContext.Provider value={{
            sanciones,
            active,
            isOpenModal,
            openModal,
            closeModal,
            handleUpdate,
            handleEditSancion
        }}>
            {children}
        </SancionesContext.Provider>
    )
}

SancionesState.propTypes = {
    children: PropTypes.element
}
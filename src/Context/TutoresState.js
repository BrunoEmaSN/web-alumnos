import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { TutoresContext } from './BuildContext';
import { useDispatch, useSelector } from 'react-redux';
import { activeTutor, cleanActiveTutor, startDeletingTutor, startLoadingTutores, startNewTutor, startSetActive, startUpdateTutor } from '../Store/Tutor/Actions/Tutor';
import { tutorModel } from '../Utils/Model/tutorModel';

export const TutoresState = ({ children }) => {
    const dispatch = useDispatch();

    const { tutores, active } = useSelector( state => state.tutor );

    useEffect(() => {
        dispatch( startLoadingTutores() );
    }, []);

    const handleCreate = () => {
        dispatch( activeTutor( tutorModel ) );
    }
    const handleEdit = ( documento ) => {
        dispatch( startSetActive( documento ) );
    }
    const handleDelete = ( documento ) => {
        dispatch( startDeletingTutor( documento ) );
    }

    const handleAddTutor = (formValues) => {
        dispatch( startNewTutor( formValues ) );
        dispatch( cleanActiveTutor() );
    }
    const handleEditTutor = (formValues) => {
        dispatch( startUpdateTutor( formValues ) );
        dispatch( cleanActiveTutor() );
    }
    const handleBack = ( e ) => {
        e.preventDefault();
        dispatch( cleanActiveTutor() );
    }

    return (
        <TutoresContext.Provider value={{
            tutores,
            active,
            handleCreate,
            handleEdit,
            handleDelete,
            handleAddTutor,
            handleEditTutor,
            handleBack
        }}>
            {children}
        </TutoresContext.Provider>
    )
}

TutoresState.propTypes = {
    children: PropTypes.element
}
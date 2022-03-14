import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../Hooks/useForm';
import { cleanActiveTutor, startNewTutor, startUpdateTutor } from '../../Store/Tutor/Actions/Tutor';
import { DatosPersonales } from '../../Template/DatosPersonales';
import { DatosPareja } from '../../Template/DatosPareja';
import { tutorModel } from '../../Utils/tutorModel';
import { DatosTutor } from '../../Template/DatosTutor';

export const TutoresSave = () => {
    const dispatch = useDispatch();

    const { active } = useSelector( state => state.tutor );

    const [ formValues, handleInputChange ] = useForm( active );

    const handleAddTutor = ( e ) => {
        e.preventDefault();
        dispatch( startNewTutor( formValues ) );
        dispatch( cleanActiveTutor() );
    }

    const handleEditTutor = ( e ) => {
        e.preventDefault();
        dispatch( startUpdateTutor( formValues ) );
        dispatch( cleanActiveTutor() );
    }

    const back = ( e ) => {
        e.preventDefault();
        dispatch( cleanActiveTutor() );
    }
    return (
        <div>
            <h1>Tutor Save</h1>
                <DatosPersonales
                    { ...formValues }
                    handleInputChange={ handleInputChange }
                />
                <DatosTutor
                    { ...formValues }
                    handleInputChange={ handleInputChange }
                />
                <DatosPareja
                    { ...formValues }
                    handleInputChange={ handleInputChange }
                />

                <div>
                    <button onClick={ active === tutorModel ? handleAddTutor : handleEditTutor } >
                        Save
                    </button>
                </div>
                <div>
                    <button onClick={ back }>
                        Volver
                    </button>
                </div>
        </div>
    );
};

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeTutor, startDeletingTutor } from '../../Store/Tutor/Actions/Tutor';
import { tutorModel } from '../../Utils/tutorModel';

export const TutoresList = () => {
    const dispatch = useDispatch();

    const { tutores } = useSelector( state => state.tutor );

    const handleCreate = () => {
        dispatch( activeTutor( tutorModel ) );
    }

    const handleEdit = ( t ) => {
        dispatch( activeTutor( t ) );
    }

    const handleDelete = ( documento ) => {
        dispatch( startDeletingTutor( documento ) );
    }
    return (
        <div>
            <h1>Tutor List</h1>
            <button onClick={ handleCreate }>Save</button>
            {
                tutores.map( t => <div key={ t.documento }>
                    { `${ t.nombre } ${ t.apellido }` }
                    <button onClick={  () => { handleEdit( t ) }  }>Edit</button>
                    <button onClick={  () => { handleDelete( t.documento ) }  }>Delete</button>
                </div>)
            }
        </div>
    );
};

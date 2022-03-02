import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeDocente, startDeletingDocente } from '../../Store/Docente/Actions/Docente';
import { docenteModel } from '../../Utils/docenteModel';

export const DocentesList = () => {
    const dispatch = useDispatch();

    const { docentes } = useSelector( state => state.docente );

    const handleCreate = () => {
        dispatch( activeDocente( docenteModel ) );
    }

    const handleEdit = ( d ) => {
        dispatch( activeDocente( d ) );
    }

    const handleDelete = ( documento ) => {
        dispatch( startDeletingDocente( documento ) );
    }
    return (
        <div>
            <h1>Docente List</h1>
            <button onClick={ handleCreate }>Save</button>
            {
                docentes.map( d => <div key={ d.documento }>
                    { `${ d.nombre } ${ d.apellido }` }
                    <button onClick={  () => { handleEdit( d ) }  }>Edit</button>
                    <button onClick={  () => { handleDelete( d.documento ) }  }>Delete</button>
                </div>)
            }
        </div>
    );
};
